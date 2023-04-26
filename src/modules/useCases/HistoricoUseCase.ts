import { prisma } from "../../prismaClient/client";

export interface historico {
    descricao: string;
    valor: number;
    tipo: string;
    create_at: Date;
}

export class HistoricoUseCase {
    async buscarHistorico() {
        const saidas = await prisma.saida.findMany();
        const entradas = await prisma.entrada.findMany();

        const entradasMaisSaidas = saidas.concat(entradas);

        // ordenando entradas e saídas - a ultima entrada ou saída dica no começo do array
        const entradasMaisSaidasOrdenadas = entradasMaisSaidas.sort((a, b) => {
            if (a.create_at > b.create_at) {
                return -1;
            }
            if (a.create_at < b.create_at) {
                return 1;
            }
            return -1;
        });

        return entradasMaisSaidasOrdenadas;
    }
}
