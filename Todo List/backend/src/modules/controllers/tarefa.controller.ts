import { Request, Response } from "express";
import { Tarefa } from "../repository/tarefa.repository";

export class TarefaController {
    /* Cria uma nova tarefa e inseri ela no banco de dados */
    async criar(req: Request, res: Response) {
        try {
            const { descricao } = req.body;

            const inserirTarefa = new Tarefa();
            const tarefa = await inserirTarefa.criar(descricao);

            res.status(200).send(tarefa);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Excluir a tarefa com base no ID */
    async excluir(req: Request, res: Response) {
        try {
            const { id } = req.query;

            const inserirTarefa = new Tarefa();
            const excluida = await inserirTarefa.excluir(Number(id));

            res.status(200).send(excluida);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Marca uma tarefa como concluida */
    async marcarComoConcluida(req: Request<number>, res: Response) {
        try {
            const { id } = req.query;
            const inserirTarefa = new Tarefa();
            const tarefa = await inserirTarefa.marcarComoConcluida(Number(id));

            res.status(200).send(tarefa);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Marca a tarefa como não concluida */
    async desmarcarComoConcluida(req: Request<number>, res: Response) {
        try {
            const { id } = req.query;
            const inserirTarefa = new Tarefa();
            const tarefa = await inserirTarefa.desmarcarComoConcluida(
                Number(id)
            );

            res.status(200).send(tarefa);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Buscar tarefas não concluidas */
    async buscarNaoConcluidas(req: Request, res: Response) {
        try {
            const tarefas = new Tarefa();
            const naoConcluidas = await tarefas.buscarNaoConcluidas();

            res.status(200).send(naoConcluidas);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Buscar tarefas concluidas */
    async buscarConcluidas(req: Request, res: Response) {
        try {
            const tarefas = new Tarefa();
            const concluidas = await tarefas.buscarConcluidas();

            res.status(200).send(concluidas);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Busca todas as tarefas */
    async buscarTodas(req: Request, res: Response) {
        try {
            const tarefas = new Tarefa();
            const todas = await tarefas.buscarTodas();

            res.status(200).send(todas);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
