const { autores } = require('../database/data');

const resolvers = {
  Query: {
    listarAutores: () => autores,
    listarAutor: (_, args) => {
      const { id } = args;
      return autores.find(autor => autor.id === id);
    }
  }
};

module.exports = resolvers;