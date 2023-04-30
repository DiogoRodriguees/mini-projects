import { prisma } from "../../prismaClient/client";

export interface historico {
    descricao: string;
    valor: number;
    tipo: string;
    create_at: Date;
}

export class HistoricoUseCase {
    async buscar(descricao) {
        const saidas = await prisma.saida.findMany({
            where: {
                descricao: { contains: descricao },
            },
        });
        const entradas = await prisma.entrada.findMany({
            where: {
                descricao: { contains: descricao },
            },
        });
        
        const historico = saidas.concat(entradas)

        const historicoOrdenado = historico.sort((a, b)=>{
            if (a.create_at > b.create_at) {
                return -1;
            }
            if (a.create_at < b.create_at) {
                return 1;
            }
            return -1;
        }
        )

        return historicoOrdenado;
    }
}
