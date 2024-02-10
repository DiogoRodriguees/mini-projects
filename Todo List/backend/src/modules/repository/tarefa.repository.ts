import { prismaclient } from "../../prismaClient/prismaclient";

export class Tarefa {
    /* Cria uma nova tarefa no banco com a descrição recebida */
    async criar(descricao: string) {
        const tarefa = await prismaclient.tarefas.create({
            data: {
                descricao,
            },
        });

        return tarefa;
    }

    /* Excluir a tarefa com determinado ID */
    async excluir(id: number) {
        const excluido = await prismaclient.tarefas.delete({
            where: {
                id: id,
            },
        });

        return excluido;
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
    async desmarcarComoConcluida(id: number) {
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
    async buscarConcluidas() {
        const concluidas = await prismaclient.tarefas.findMany({
            where: {
                completa: true,
            },
        });

        return concluidas;
    }

    /* Busca tarefas não concluidas */
    async buscarNaoConcluidas() {
        const naoConcluidas = await prismaclient.tarefas.findMany({
            where: {
                completa: false,
            },
        });

        return naoConcluidas;
    }

    /* Busca todas as tarefas */
    async buscarTodas() {
        const todas = await prismaclient.tarefas.findMany();

        return todas;
    }
}
