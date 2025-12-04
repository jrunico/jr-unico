// Banco de dados em memória (ESM)
let livros = [];
let nextId = 1;

export function getAll() {
  return livros;
}

export function create(livro) {
  livro.id = nextId++;
  livros.push(livro);
  return livro;
}

export function update(id, novosDados) {
  const index = livros.findIndex((l) => l.id === id);

  if (index === -1) return null;

  livros[index] = { id, ...novosDados };
  return livros[index];
}

export function remove(id) {
  const index = livros.findIndex((l) => l.id === id);

  if (index === -1) return false;

  livros.splice(index, 1);
  return true;
}

export function search(filters) {
  return livros.filter((livro) => {
    return (
      (!filters.title || livro.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (!filters.author || livro.author.toLowerCase().includes(filters.author.toLowerCase())) &&
      (!filters.genre || livro.genre.toLowerCase().includes(filters.genre.toLowerCase())) &&
      (!filters.year || livro.year === Number(filters.year))
    );
  });
}
