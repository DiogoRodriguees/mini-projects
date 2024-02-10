import { Request, Response } from "express";
import { SaidaUseCase } from "../repositories/saida.repository";

export class SaidaController {
    async novaSaida(req: Request, res: Response) {
        try {
            const { valor, descricao, tipo } = req.body;
            const novaEntrada = new SaidaUseCase();

            const saida = await novaEntrada.criarSaida({
                valor,
                descricao,
                tipo,
            });

            res.status(200).send(saida);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async buscarTodasSaidas(req: Request, res: Response) {
        try {
            const saidaUseCase = new SaidaUseCase();
            const saidas = await saidaUseCase.buscarTodasSaidas();

            res.status(200).send(saidas);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
