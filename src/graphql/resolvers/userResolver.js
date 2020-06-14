const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const resolver = {
  Query: {
    async user(_, args, { user }) {
      if (!args._id) {
        return user;
      }
      user = await User.findById(args._id);
      return user;
    },
  },

  Mutation: {
    async signUp(_, args) {
      const user = new User({ ...args });
      token = await user.generateAuthToken();
      await user.save();
      return { user, token };
    },
    async login(_, { email, password }) {
      const user = await User.findByCredentials(email, password);
      token = await user.generateAuthToken();
      return { user, token };
    },
  },
};

module.exports = resolver;