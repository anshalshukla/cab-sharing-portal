const buildUserDataLoader = require("./dataloaders/userDataLoader");

module.exports = () => ({
  userLoader: buildUserDataLoader(),
});