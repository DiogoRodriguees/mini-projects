import { Flex } from "antd";
import { CardListProps } from "../../helpers/types";

export const CardList: React.FC<CardListProps> = ({ children }) => {
    return (
        <Flex vertical className="h-5/6 gap-6 px-4 overflow-y-scroll ">
            {children}
        </Flex>
    );
};
