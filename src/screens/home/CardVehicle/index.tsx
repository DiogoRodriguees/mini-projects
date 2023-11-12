import { Button, Card, Flex, Progress, Typography } from "antd";
import React from "react";

type CardComponentProps = {
    showCardDetails: () => void;
};

export const CardVehicle: React.FC<CardComponentProps> = ({
    showCardDetails,
}: CardComponentProps) => {
    const defineColor = (percent: number) => {
        if (percent < 25) return "red";
        if (percent < 50) return "orange";
        if (percent < 75) return "yellow";
        return "green";
    };

    return (
        <Card className="bg-white h-48 w-9/10 my-5 px-4 rounded-md shadow-md ">
            <Flex vertical>
                <Flex className="justify-between">
                    <Typography.Text className="font-bold text-lg">
                        Marca
                    </Typography.Text>
                    <Typography.Text className="font-bold text-lg">
                        2003
                    </Typography.Text>
                </Flex>
                <Flex>
                    <Typography.Text className="h-16  text-justify my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod quia voluptatem, enim eligendi officiis minus
                        voluptas recusandae dolorum aspernatur iure quisquam
                        delectus assumenda, optio officia, alias modi ex
                        dignissimos saepe.
                    </Typography.Text>
                </Flex>

                <Flex className="justify-between items-baseline">
                    <Flex className="w-4/5 gap-6">
                        <Typography.Text>Conservação</Typography.Text>
                        <Progress
                            className="w-2/5"
                            percent={79}
                            strokeColor={defineColor(79)}
                        />
                    </Flex>
                    <Button
                        type="primary"
                        onClick={() => showCardDetails()}
                        className="bg-blue-500 justify-end h-10 text-base"
                    >
                        Ver Detalhes
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
};
