import { Request, Response } from "express";
import { HistoricoUseCase } from "../useCases/HistoricoUseCase";

export class HistoricoController {
    async buscarHistorico(req: Request, res: Response) {
        const historicoUseCase = new HistoricoUseCase();
        const entradasMaisSaidas = await historicoUseCase.buscarHistorico();

        return res.json(entradasMaisSaidas);
    }
}
