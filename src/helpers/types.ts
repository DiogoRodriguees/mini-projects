import { ReactElement } from "react";

export type CardListProps = {
    children: ReactElement[];
};

export type FieldType = {
    model: string;
    year: number;
    brand: string;
    sold: boolean;
};

export type CardProps = {
    vehicles: VehicleProps[];
    showDetails: (vehicleParam: VehicleProps) => void;
};

export type ListCardProps = {
    showDetails: (vehicleParam: VehicleProps) => void;
};

export type VehicleProps = {
    description: string;
    model: string;
    year: number;
    brand: string;
    conservation: number;
    sold: boolean;
};

export type CardDetailProps = {
    vehicle: VehicleProps;
    closeCard: () => void;
};

export type CardComponentProps = {
    vehicle: VehicleProps;
    showDetails: (vehicle: VehicleProps) => void;
};
