const { autores } = require('../database/data');

const resolvers = {
  Query: {
    listarAutores: () => autores,
    listarAutor: (_, args) => {
      const { id } = args;
      return autores.find(autor => autor.id === id);
    }
  },
  Mutation: {
    criarAutor(_, args) {
      const { autor } = args;
      const { nome, livros } = autor;
      const novoAutor = {
        id: autores.length + 1,
        nome,
        livros
      };
      autores.push(novoAutor);
      return novoAutor;
    }
  }
};

module.exports = resolvers;