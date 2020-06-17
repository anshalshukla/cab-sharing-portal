const User = require("../../models/user");
const {getAccessTokenFromCode, getUserData} = require("../../utils/oAuth2Google");

const resolver = {
  Query: {
    async all_users(_, args){
      users = await User.find({});
      return users
    },
    async user(_, args, { user }) {
      if (!args._id) {
        return user;
      }
      user = await User.findById(args._id);
      return user;
    },
  },

  Mutation: {
    async oAuth2Google(_, {code}) {
    const access_token = await getAccessTokenFromCode(code);
    const data = await getUserData(access_token);

    const user = await User.find({email: data.email});
    
    if (user.length === 0) {
        const user = new User({
            name: data.name,
            email: data.email
        });
        await user.save();
        const token = await user.generateAuthToken();
        return {token};
    } else {
        const token = await user[0].generateAuthToken();
        return {token};
      };
    },
  },
};

module.exports = resolver;