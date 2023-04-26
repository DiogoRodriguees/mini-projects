import { Request, Response } from "express";
import { SaidaUseCase } from "../useCases/SaidaUseCase";

export class SaidaController {
    async novaSaida(req: Request, res: Response) {
        const { valor, descricao, tipo } = req.body;

        const novaEntrada = new SaidaUseCase();

        const saida = await novaEntrada.criarSaida({
            valor,
            descricao,
            tipo,
        });

        return res.json(saida);
    }

    async buscarTodasSaidas(req: Request, res: Response) {
        const saidaUseCase = new SaidaUseCase();
        const saidas = await saidaUseCase.buscarTodasSaidas();

        return res.json(saidas);
    }
}
