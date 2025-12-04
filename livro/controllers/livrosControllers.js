import { create, getAll, update, remove, search } from "../data/livrosData.js";

export function criarLivro(req, res) {
  const { title, author, year, genre } = req.body;

  if (!title || !author || !year || !genre) {
    return res.status(400).json({ mensagem: "Dados incompletos." });
  }

  const novoLivro = create({ title, author, year, genre });
  res.status(201).json(novoLivro);
}

export function listarLivros(req, res) {
  const livros = getAll();
  res.json(livros);
}

export function atualizarLivro(req, res) {
  const id = Number(req.params.id);
  const { title, author, year, genre } = req.body;

  const atualizado = update(id, { title, author, year, genre });

  if (!atualizado) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  res.json(atualizado);
}

export function deletarLivro(req, res) {
  const id = Number(req.params.id);
  const deletado = remove(id);

  if (!deletado) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  res.json({ mensagem: "Livro removido com sucesso." });
}

export function buscarLivros(req, res) {
  const filtros = req.query;
  const resultados = search(filtros);
  res.json(resultados);
}
