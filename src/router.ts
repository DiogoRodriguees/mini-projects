import { Router } from "express";
import { EntradaController } from "./modules/Entrada/EntradaController";
import { SaidaController } from "./modules/Saida/SaidaController";
import { HistoricoController } from "./modules/HistoricoDeOperacoes/HistoricoController";

const entrada = new EntradaController();
const saida = new SaidaController();
const historico = new HistoricoController();

const routes = Router();

// entradas
routes.post("/entrada", entrada.novaEntrada);
routes.get("/entradas", entrada.buscarTodasEntradas);

// saidas
routes.post("/saida", saida.novaSaida);
routes.get("/saidas", saida.buscarTodasSaidas);

// historico
routes.get("/historico", historico.buscarHistorico);

export { routes };
