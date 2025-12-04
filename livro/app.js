import express from "express";
import livrosRoutes from "./routes/livrosRoutes.js";

const app = express();

app.use(express.json());

app.use("/livros", livrosRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
