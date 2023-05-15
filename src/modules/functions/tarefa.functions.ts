import { prismaclient } from "../../prismaClient/prismaclient";

export class Tarefa {
    /* Cria uma nova tarefa no banco com a descrição recebida */
    async inserirNovaTarefa(descricao: string) {
        const tarefa = await prismaclient.tarefas.create({
            data: {
                descricao,
            },
        });

        return tarefa;
    }

    /* Busca a tarefa e marca como concluida */
    async marcarComoConcluida(id: number) {
        const tarefa = await prismaclient.tarefas.update({
            where: {
                id: id,
            },
            data: {
                completa: true,
            },
        });

        return tarefa;
    }

    /* Busca a tarefa e desmarca como concluida */
    async marcarComoNaoConcluida(id: number) {
        const tarefa = await prismaclient.tarefas.update({
            where: {
                id: id,
            },
            data: {
                completa: false,
            },
        });

        return tarefa;
    }

    /* Busca tarefas concluidas */
    async buscarTarefasConcluidas() {
        const concluidas = await prismaclient.tarefas.findMany({
            where: {
                completa: true,
            },
        });

        return concluidas;
    }

    /* Busca tarefas não concluidas */
    async buscarTarefasNaoConcluidas() {
        const naoConcluidas = await prismaclient.tarefas.findMany({
            where: {
                completa: false,
            },
        });

        return naoConcluidas;
    }
}
