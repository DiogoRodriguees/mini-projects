import { Vehicle } from "@prisma/client";
import { prismaclient as prisma } from "../../services/prismaclient";

export class CarsRepository {
    /* Criar um novo carro */
    async create(vehicle: Vehicle) {
        const car = await prisma.vehicle.create({
            data: {
                model: vehicle.model,
                brand: vehicle.brand,
                year: vehicle.year,
                description: vehicle.description,
                sold: vehicle.sold,
                conservation: vehicle.conservation,
            },
        });

        return car;
    }

    /* Para editar os campos do car */
    async updateCar(
        id: number,
        { model, brand, year, description, sold }: Vehicle
    ) {
        const carExists = await prisma.vehicle.findUnique({ where: { id } });

        if (carExists) {
            const car = await prisma.vehicle.update({
                where: {
                    id,
                },
                data: {
                    model,
                    brand,
                    year,
                    description,
                    sold,
                },
            });
            return car;
        }
    }

    /* Busca todos os carros cadastrados */
    async getAll() {
        const cars = await prisma.vehicle.findMany();

        return cars;
    }

    /* Busca os carros que correpondem ao parametro */
    async getByParam(params: string) {
        const cars = await prisma.vehicle.findMany({
            where: {
                OR: [
                    { model: { contains: params } },
                    { brand: { contains: params } },
                ],
            },
        });

        return cars;
    }

    /* Busca cars que corresponde ao ID */
    async getById(id: number) {
        const car = await prisma.vehicle.findMany({
            where: {
                id: id,
            },
        });

        return car;
    }
}
