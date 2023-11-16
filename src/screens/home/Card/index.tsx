import { Card as CardAnt, Flex, Typography } from "antd";
import React from "react";
import {
    HiMiniArrowLongDown,
    HiMiniArrowLongUp,
    HiMiniArrowsUpDown,
} from "react-icons/hi2";
const { Text } = Typography;
type CardProps = {
    type: string;
    value: number;
};
export const Card: React.FC<CardProps> = ({ type, value }) => {
    return (
        <CardAnt className="rounded-xl shadow-md h-44 w-80 bg-white border-none ">
            <Flex className="items-center h-16">
                <Text className="text-2xl font-medium">{type}</Text>
            </Flex>
            <Flex className="items-center gap-6 ">
                {type === "Entradas" && (
                    <div className="bg-green-100 p-2 rounded-md">
                        <HiMiniArrowLongUp size="25" color="#34d399" />
                    </div>
                )}
                {type === "Saidas" && (
                    <div className="bg-red-100 p-2 rounded-md">
                        <HiMiniArrowLongDown size="25" color="#f87171" />
                    </div>
                )}
                {type === "Total" && (
                    <div className="bg-gray-100 p-2 rounded-md">
                        <HiMiniArrowsUpDown size="25" color="##d1d5db" />
                    </div>
                )}
                <Text className="font-medium text-3xl">R$ {value}</Text>
            </Flex>
        </CardAnt>
    );
};
