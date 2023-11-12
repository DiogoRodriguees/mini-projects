import { CardListProps } from "../../helpers/types";

export const CardList: React.FC<CardListProps> = ({ children }) => {
    return <div className="h-5/6 overflow-y:scroll ">{children}</div>;
};
