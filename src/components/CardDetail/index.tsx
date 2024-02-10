import { Button, Col, Flex, Progress, Typography } from "antd";
import { CardDetailProps } from "../../helpers/types";
import { CardGeneric } from "../Card/Card";

export const CardDetail: React.FC<CardDetailProps> = ({
    vehicle,
    closeCard,
}) => {
    const defineColor = (percent: number) => {
        if (percent < 25) return "red";
        if (percent < 50) return "orange";
        if (percent < 75) return "yellow";
        return "green";
    };

    return (
        <CardGeneric>
            <Col>
                <Flex className="justify-between items-center">
                    <Typography.Text className="text-4xl">
                        {vehicle.brand} - {vehicle.model}
                    </Typography.Text>
                    <Typography.Text className="text-4xl">
                        Modelo: {vehicle.year}
                    </Typography.Text>
                </Flex>
                <Flex className="w-4/5 gap-2 my-10" vertical>
                    <Typography.Text>Conservação</Typography.Text>
                    <Progress
                        className="w-2/5"
                        percent={vehicle.conservation}
                        strokeColor={defineColor(79)}
                    />
                </Flex>
                <Flex className="max-h-64 h-32">
                    <Typography.Text className="text-justify">
                        {vehicle.description}
                    </Typography.Text>
                </Flex>
                <Flex className="justify-end">
                    <Button
                        onClick={closeCard}
                        className="h-10 text-lg w-32 my-4 bg-blue-500"
                        type="primary"
                    >
                        Fechar
                    </Button>
                </Flex>
            </Col>
        </CardGeneric>
    );
};
