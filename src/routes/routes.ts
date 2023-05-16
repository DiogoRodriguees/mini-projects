import { Router } from "express";
import { TarefaController } from "../modules/controllers/tarefa.controller";

const routes = Router();
const tarefas = new TarefaController();

/* Criação de novas tarefas */
routes.post("/inserirTarefa", tarefas.criar);

/* Conclusão de tarefas */
routes.post("/concluirTarefa/:id", tarefas.marcarComoConcluida);
routes.post("/naoConcluirTarefa/:id", tarefas.marcarComoNaoConcluida);

/* Busca de tarefas */
routes.get("/buscarTarefas/concluidas", tarefas.buscarTarefasConcluidas);
routes.get("/buscarTarefas/naoConcluidas", tarefas.buscarTarefasNaoConcluidas);
routes.get("/buscarTarefas", tarefas.buscarTarefas)

/* Exclusão de tarefas */
routes.delete("/excluir/:id", tarefas.excluir)

export { routes };
