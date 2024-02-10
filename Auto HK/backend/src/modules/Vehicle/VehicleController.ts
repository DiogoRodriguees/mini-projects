import { Request, Response } from "express";
import { CarsRepository } from "./VehicleRepository";

const carsRepository = new CarsRepository();
export class CarsController {
    /* Cria um novo carro */
    async create(req: Request, res: Response) {
        try {
            const newCar = await carsRepository.create(req.body);

            res.status(200).send(newCar);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Busca todos os carros cadastrados */
    async getAll(req: Request, res: Response) {
        try {
            const cars = await carsRepository.getAll();

            res.status(200).send(cars);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Editar atributos do car */
    async updateCar(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const cars = carsRepository.updateCar(Number(id), req.body);

            res.status(200).send(cars);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Busca cars correspondente ao parametro */
    async getByParams(req: Request, res: Response) {
        try {
            const { find } = req.query;
            const cars = await carsRepository.getByParam(String(find));

            res.status(200).send(cars);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Busca cars que correponde ao ID */
    async getById(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const cars = await carsRepository.getById(Number(id));
            res.status(200).send(cars);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
