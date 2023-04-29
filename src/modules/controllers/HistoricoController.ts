import { Request, Response } from "express";
import { HistoricoUseCase } from "../useCases/HistoricoUseCase";

export class HistoricoController {
 
    async buscar(req: Request, res: Response){
        const {descricao} = req.query 
        
        const historicoUseCase = new HistoricoUseCase();
        const historico = await historicoUseCase.buscar(descricao);
        
        return res.json(historico);
    }
}
