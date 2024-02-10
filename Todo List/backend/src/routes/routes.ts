import { Router } from "express";
import { TarefaController } from "../modules/controllers/tarefa.controller";

const routes = Router();
const tarefas = new TarefaController();

/* Criação de novas tarefas */
routes.post("/inserirTarefa", tarefas.criar);

/* Conclusão de tarefas */
routes.post("/concluirTarefa/:id", tarefas.marcarComoConcluida);
routes.post("/naoConcluirTarefa/:id", tarefas.desmarcarComoConcluida);

/* Busca de tarefas */
routes.get("/buscarTarefas/concluidas", tarefas.buscarConcluidas);
routes.get("/buscarTarefas/naoConcluidas", tarefas.buscarNaoConcluidas);
routes.get("/buscarTarefas", tarefas.buscarTodas);

/* Exclusão de tarefas */
routes.delete("/excluir/:id", tarefas.excluir);

export { routes };
