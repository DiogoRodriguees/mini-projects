import { Router } from "express";
import { TarefaController } from "../modules/controllers/tarefa.controller";

const routes = Router();
const tarefas = new TarefaController();

routes.post("/inserirTarefa", tarefas.criar);
routes.post("/concluirTarefa/:id", tarefas.marcarComoConcluida);
routes.post("/naoConcluirTarefa/:id", tarefas.marcarComoNaoConcluida);
routes.get("/buscarTarefas/concluidas", tarefas.buscarTarefasConcluidas);
routes.get("/buscarTarefas/naoConcluidas", tarefas.buscarTarefasNaoConcluidas);

export { routes };
