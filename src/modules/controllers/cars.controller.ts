import { Request, Response } from "express";
import { CarsRepository } from "../repositorys/cars.repositoy";

export class CarsController {
    /* Cria um novo carro */
    async create(req: Request, res: Response) {
        try {
            const carsRepository = new CarsRepository();
            const newCar = await carsRepository.create(req.body);

            res.status(200).send(newCar);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    /* Busca todos os carros cadastrados */
    async getAll(req: Request, res: Response) {
        try {
            const carsRepository = new CarsRepository();
            const cars = await carsRepository.getAll();

            res.status(200).send(cars);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async getByParams(req: Request, res: Response) {
        try {
            const carsRepository = new CarsRepository();
            const cars = await carsRepository.getByParam(String(req.query));
            
            res.status(200).send(cars);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
