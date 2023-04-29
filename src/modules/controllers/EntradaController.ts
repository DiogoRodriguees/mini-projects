import { Request, Response } from "express";
import { EntradaUseCase } from "../useCases/EntradaUseCase";

export class EntradaController {
    async novaEntrada(req: Request, res: Response) {
        const { valor, descricao, tipo } = req.body;

        const entradaUseCase = new EntradaUseCase();
        

        const entrada = await entradaUseCase.criarEntrada({
            valor,
            descricao,
            tipo,
        });

        return res.json(entrada);
    }

    async buscarTodasEntradas(req: Request, res: Response) {
        const entradaUseCase = new EntradaUseCase();

        const entradas = await entradaUseCase.buscarTodasEntradas();

        return res.json(entradas);
    }
}
