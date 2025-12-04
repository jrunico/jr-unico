import { Router } from "express";

import {
  criarLivro,
  listarLivros,
  atualizarLivro,
  deletarLivro,
  buscarLivros
} from "../controllers/livrosController.js";

const router = Router();

router.post("/", criarLivro);
router.get("/", listarLivros);
router.put("/:id", atualizarLivro);
router.delete("/:id", deletarLivro);
router.get("/busca", buscarLivros);

export default router;
