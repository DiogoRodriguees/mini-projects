import { Request, Response } from "express";
import { Tarefa } from "../functions/tarefa.functions";
import { LargeNumberLike } from "crypto";
import { ADDRGETNETWORKPARAMS } from "dns";

export class TarefaController {
    /* Cria uma nova tarefa e inseri ela no banco de dados */
    async criar(req: Request, res: Response) {
        const { descricao } = req.body;

        const inserirTarefa = new Tarefa();
        const tarefa = await inserirTarefa.inserirNovaTarefa(descricao);

        return res.json(tarefa);
    }

    /* Marca uma tarefa como concluida */
    async marcarComoConcluida(req: Request<number>, res: Response) {
        const { id } = req.query;
        const inserirTarefa = new Tarefa();
        const tarefa = await inserirTarefa.marcarComoConcluida(Number(id));

        return res.json(tarefa);
    }

    /* Marca a tarefa como não concluida */
    async marcarComoNaoConcluida(req: Request<number>, res: Response) {
        const { id } = req.query;
        const inserirTarefa = new Tarefa();
        const tarefa = await inserirTarefa.marcarComoNaoConcluida(Number(id));

        return res.json(tarefa);
    }

    /* Buscar tarefas não concluidas */
    async buscarTarefasNaoConcluidas(req: Request, res: Response) {
        const naoConcluidas = await 
        
        return res.json(naoConcluidas)
    }

    /* Buscar tarefas concluidas */
    async buscarTarefasConcluidas(req: Request, res: Response) {}
}
