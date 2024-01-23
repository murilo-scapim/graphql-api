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

  input LivroInput {
    id: ID!
    titulo: String!
    ano_publicacao: Int!
  }

  input AutorInput {
    nome: String!
    livros: [LivroInput]!
  }

  type Query {
    listarAutores: [Autor]
    listarAutor(id: ID!): Autor
  }

  type Mutation {
    criarAutor(autor: AutorInput): Autor
  }
`;

module.exports = typeDefs;