import { prisma } from "../../prismaClient/client";
import { EntradaDTO } from "../types/EntradaDTO";

export class EntradaUseCase {
    async criarEntrada({ valor, descricao, tipo }: EntradaDTO) {
        const entrada = await prisma.entrada.create({
            data: {
                valor,
                descricao,
                tipo,
            },
        });

        return entrada;
    }

    async buscarTodasEntradas() {
        const entradas = await prisma.entrada.findMany();

        return entradas;
    }
}
