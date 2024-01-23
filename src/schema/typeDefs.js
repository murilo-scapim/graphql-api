const { gql } = require('apollo-server');

// Definição do schema do GraphQL
const typeDefs = gql`
  type Autor {
    id: ID!
    nome: String!
    livros: [Livro]!
  }

  type Livro {
    id: ID!
    titulo: String!
    ano_publicacao: Int!
  }

  type Query {
    listarAutores: [Autor]
    listarAutor(id: ID!): Autor
  }
`;

module.exports = typeDefs;