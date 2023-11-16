import { Checkbox, Col, Flex, Row, Typography } from "antd";
import React from "react";
import { HiMiniArrowLongDown, HiMiniArrowLongUp } from "react-icons/hi2";
import { Card } from "./Card";

const { Text } = Typography;

const example = [
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-green-100 p-2  h-8 w-8 rounded-md">
                <HiMiniArrowLongUp size="16" color="#34d399" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-red-100 p-2 h-8 w-8 rounded-md">
                <HiMiniArrowLongDown size="16" color="#f87171" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-green-100 p-2  h-8 w-8 rounded-md">
                <HiMiniArrowLongUp size="16" color="#34d399" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-red-100 p-2 h-8 w-8 rounded-md">
                <HiMiniArrowLongDown size="16" color="#f87171" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-red-100 p-2 h-8 w-8 rounded-md">
                <HiMiniArrowLongDown size="16" color="#f87171" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-red-100 p-2 h-8 w-8 rounded-md">
                <HiMiniArrowLongDown size="16" color="#f87171" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-red-100 p-2 h-8 w-8 rounded-md">
                <HiMiniArrowLongDown size="16" color="#f87171" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-red-100 p-2 h-8 w-8 rounded-md">
                <HiMiniArrowLongDown size="16" color="#f87171" />
            </div>
        ),
    },
    {
        category: "Alimentação",
        description: "Supermercado Muffato",
        createAt: "20/03/2023",
        value: 100,
        type: (
            <div className="bg-red-100 p-2 h-8 w-8 rounded-md">
                <HiMiniArrowLongDown size="16" color="#f87171" />
            </div>
        ),
    },
];

// type FinanceProps = {
//     category: string;
//     value: number;
//     description: string;
//     createAt: string;
//     type: "Entrada" | "Saida";
// };

export const Home: React.FC = () => {
    return (
        <Flex className="p-16 gap-10 h-screen bg-white">
            <Flex className="gap-16" vertical>
                <Flex className="gap-16">
                    <Card type="Entradas" value={1000.0} />
                    <Card type="Saidas" value={956.8} />
                    <Card type="Total" value={43.2} />
                </Flex>
                <Col className="w-full bg-white h-full py-6 px-6 shadow-md rounded-xl">
                    <Row className="h-12 px-2 items-center">
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Text className="font-bold hover:cursor-default">
                                Categoria
                            </Text>
                        </Col>
                        <Col span={13}>
                            <Text className="font-bold hover:cursor-default">
                                Descrição
                            </Text>
                        </Col>
                        <Col span={3}>
                            <Text className="font-bold hover:cursor-default">
                                Valor
                            </Text>
                        </Col>
                        <Col span={3}>
                            <Text className="font-bold hover:cursor-default">
                                Data
                            </Text>
                        </Col>
                        <Col span={1}>
                            <Text className="font-bold hover:cursor-default">
                                Tipo
                            </Text>
                        </Col>
                    </Row>
                    <Col
                        span={24}
                        className="h-[calc(100%-48px)] overflow-y-scroll"
                    >
                        {example.map((item) => (
                            <Row className="h-10 px-2 my-2 items-center hover:bg-gray-100">
                                <Col span={1}>
                                    <Checkbox />
                                </Col>
                                <Col span={3}>
                                    <Text className="hover:cursor-default">
                                        {item.category}
                                    </Text>
                                </Col>
                                <Col span={13}>
                                    <Text className="hover:cursor-default">
                                        {item.description}
                                    </Text>
                                </Col>
                                <Col span={3}>
                                    <Text className="hover:cursor-default">
                                        {item.value}
                                    </Text>
                                </Col>
                                <Col span={3}>
                                    <Text className="hover:cursor-default">
                                        {item.createAt}
                                    </Text>
                                </Col>
                                <Col span={1}>
                                    <Text className="hover:cursor-default">
                                        {item.type}
                                    </Text>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Col>
            </Flex>
            <Flex className="bg-white shadow-md w-full rounded-xl">
                <p></p>
            </Flex>
        </Flex>
    );
};
