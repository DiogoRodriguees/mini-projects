import { Card as CardAnt, Flex, Typography } from "antd";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { CardProps } from "../../helpers/types";

const { Text } = Typography;

export const Card: React.FC<CardProps> = ({ type, value, icon, onClick }) => {
  return (
    <CardAnt className="hover:cursor-default rounded-xl shadow-lg h-44 w-80 bg-white border-none">
      <Flex className="items-center h-16 justify-between">
        <Text className="text-2xl font-semibold">{type}</Text>
        {onClick && (
          <button className="hover:cursor-pointer" onClick={onClick}>
            <BsPlusCircleFill size="30" className="text-blue-400" />
          </button>
        )}
      </Flex>
      <Flex className="items-center gap-6 ">
        {icon}
        <Text className="font-medium text-3xl">
          R$ {value.toFixed(2).replace(/[^0-9]/g, ",")}
        </Text>
      </Flex>
    </CardAnt>
  );
};
