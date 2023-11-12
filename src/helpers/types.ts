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

export type CardComponentProps = {
    showCardDetails: () => void;
};
