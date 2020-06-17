const DataLoader = require("dataloader");
const User = require("../../models/user");

const batchById = async (keys) => {
  return await User.find({ _id: { $in: keys } });
};

const buildUserDataLoader = () =>
  new DataLoader((keys) => batchById(keys), {
    cacheKeyFn: (key) => key.toString(),
  });

module.exports = buildUserDataLoader;