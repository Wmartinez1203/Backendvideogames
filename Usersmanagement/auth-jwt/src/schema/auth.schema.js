const { gql } = require("apollo-server-express");

module.exports = gql`
  type AuthPayload {
    token: String!
    message: String!
  }

  type Query {
    _empty: String
  }

  type Mutation {
    loginUser(correo: String!, contrasena: String!): AuthPayload!
  }
`;
