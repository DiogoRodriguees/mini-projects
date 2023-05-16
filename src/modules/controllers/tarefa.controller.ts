import { Request, Response } from "express";
import { Tarefa } from "../functions/tarefa.functions";

export class TarefaController {
    /* Cria uma nova tarefa e inseri ela no banco de dados */
    async criar(req: Request, res: Response) {
        const { descricao } = req.body;

        const inserirTarefa = new Tarefa();
        const tarefa = await inserirTarefa.criar(descricao);

        return res.json(tarefa);
    }

    /* Excluir a tarefa com base no ID */
    async excluir(req: Request, res: Response) {
        const { id } = req.query;

        const inserirTarefa = new Tarefa();
        const excluida = await inserirTarefa.excluir(Number(id));

        return res.json(excluida);
    }

    /* Marca uma tarefa como concluida */
    async marcarComoConcluida(req: Request<number>, res: Response) {
        const { id } = req.query;
        const inserirTarefa = new Tarefa();
        const tarefa = await inserirTarefa.marcarComoConcluida(Number(id));

        return res.json(tarefa);
    }

    /* Marca a tarefa como não concluida */
    async desmarcarComoConcluida(req: Request<number>, res: Response) {
        const { id } = req.query;
        const inserirTarefa = new Tarefa();
        const tarefa = await inserirTarefa.desmarcarComoConcluida(Number(id));

        return res.json(tarefa);
    }

    /* Buscar tarefas não concluidas */
    async buscarNaoConcluidas(req: Request, res: Response) {
        const tarefas = new Tarefa();
        const naoConcluidas = await tarefas.buscarNaoConcluidas();

        return res.json(naoConcluidas);
    }

    /* Buscar tarefas concluidas */
    async buscarConcluidas(req: Request, res: Response) {
        const tarefas = new Tarefa();
        const concluidas = await tarefas.buscarConcluidas();

        return res.json(concluidas);
    }

    /* Busca todas as tarefas */
    async buscarTodas(req: Request, res: Response) {
        const tarefas = new Tarefa();
        const todas = await tarefas.buscarTodas();

        return res.json(todas);
    }
}
