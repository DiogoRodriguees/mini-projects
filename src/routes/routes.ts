import { Router } from "express";
import { CarsController } from "../modules/controllers/cars.controller";

const carsController = new CarsController();

const routes = Router();

routes.post("/create", carsController.create);
routes.get("/cars", carsController.getAll);
routes.get("/cars/find", carsController.getByParams);
routes.get("/cars/:id", carsController.getById);
routes.put("/cars/:id", carsController.updateCar)

export { routes };
