const { fileLoader, mergeTypes } = require("merge-graphql-schemas");
const { join } = require("path");
const { gql } = require("apollo-server-express");

const typesArray = fileLoader(join(__dirname, "./typedefs"));
typeDefs = mergeTypes(typesArray, { all: true });

module.exports = gql`
  ${typeDefs}
`;