import { ReactElement } from "react";

export type CardListProps = {
    children: ReactElement[];
};

export type FieldType = {
    model?: string;
    year?: number;
    brand?: string;
};

export type ListCardProps = {
    list: ReactElement[];
};

export type VehicleProps = {
    description: string;
    name: string;
    year: number;
    brand: string;
    consevation: number;
};

export type CardDetailProps = {
    vehicle: VehicleProps;
    closeCard: () => void;
};

export type CardComponentProps = {
    vehicle: VehicleProps;
    showCardDetails: (vehicle: VehicleProps) => void;
};
