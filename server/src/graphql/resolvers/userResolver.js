const User = require("../../models/user");
const {getUserData} = require("../../utils/oAuth2Google");

const resolver = {
  Query: {
    async logged_user(_, args, context) {
      const user = await context.user;
      await user.populate('cabs').execPopulate();

      return user;
    },
  },

  Mutation: {
    async oAuth2Google(_, {access_token}) {
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