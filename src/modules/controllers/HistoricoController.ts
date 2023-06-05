import { Request, Response } from "express";
import { HistoricoUseCase } from "../repositories/historico.repository";

export class HistoricoController {
    async buscar(req: Request, res: Response) {
        try {
            const { descricao } = req.query;

            const historicoUseCase = new HistoricoUseCase();
            const historico = await historicoUseCase.buscar(descricao);

            res.status(200).send(historico);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
