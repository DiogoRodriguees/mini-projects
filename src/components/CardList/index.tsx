import { ReactElement } from "react";

type CardListProps = {
    children: ReactElement[];
};

export const CardList: React.FC<CardListProps> = ({
    children,
}: CardListProps) => {
    return <div className="h-5/6 overflow-y:scroll ">{children}</div>;
};
