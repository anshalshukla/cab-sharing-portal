const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { join } = require("path");

const typesArray = loadFilesSync(join(__dirname, "./typedefs"));

module.exports = mergeTypeDefs(typesArray, { all: true })