import { Router } from "express";
import { TarefaController } from "../modules/controllers/tarefa.controller";

const routes = Router();
const inserirTarefa = new TarefaController();

routes.post("/inserirTarefa", inserirTarefa.criar);
routes.post("/concluirTarefa/:id", inserirTarefa.marcarComoConcluida);
routes.post("/naoConcluirTarefa/:id", inserirTarefa.marcarComoNaoConcluida);

export { routes };
