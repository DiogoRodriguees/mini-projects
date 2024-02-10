import { prisma } from "../../services/client";
import { SaidaDTO } from "../types/SaidaDTO";

export class SaidaUseCase {
    async criarSaida({ valor, descricao, tipo }: SaidaDTO) {
        const saida = await prisma.saida.create({
            data: {
                valor,
                descricao,
                tipo,
            },
        });

        return saida;
    }

    async buscarTodasSaidas() {
        const saidas = await prisma.saida.findMany();

        return saidas;
    }
}
