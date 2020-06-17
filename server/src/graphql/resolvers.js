const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge');
const { join } = require("path");

const resolversArray = loadFilesSync(join(__dirname, "./resolvers"));

const resolvers = mergeResolvers(resolversArray);

module.exports = resolvers;