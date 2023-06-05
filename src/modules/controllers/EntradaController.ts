import { Request, Response } from "express";
import { EntradaUseCase } from "../repositories/entradas.repository";

export class EntradaController {
    async novaEntrada(req: Request, res: Response) {
        try {
            const { valor, descricao, tipo } = req.body;

            const entradaUseCase = new EntradaUseCase();

            const entrada = await entradaUseCase.criarEntrada({
                valor,
                descricao,
                tipo,
            });

            res.status(200).send(entrada);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async buscarTodasEntradas(req: Request, res: Response) {
        try {
            const entradaUseCase = new EntradaUseCase();

            const entradas = await entradaUseCase.buscarTodasEntradas();

            res.json(entradas);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
