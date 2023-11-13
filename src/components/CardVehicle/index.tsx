import { Button, Card, Flex, Progress, Typography } from "antd";
import { CardComponentProps } from "../../helpers/types";

const defineColor = (percent: number) => {
    if (percent < 25) return "red";
    if (percent < 50) return "orange";
    if (percent < 75) return "yellow";
    return "green";
};

export const CardVehicle: React.FC<CardComponentProps> = (props) => {
    return (
        <Card className="bg-white h-48 w-9/10 px-4 rounded-md shadow-md ">
            <Flex vertical>
                <Flex className="justify-between">
                    <Typography.Text className="font-bold text-lg">
                        {props.vehicle.brand} - {props.vehicle.name}
                    </Typography.Text>
                    <Typography.Text className="font-bold text-lg">
                        {props.vehicle.year}
                    </Typography.Text>
                </Flex>
                <Flex>
                    <Typography.Text className="h-16  text-justify my-2">
                        {props.vehicle.description}
                    </Typography.Text>
                </Flex>

                <Flex className="justify-between items-baseline">
                    <Flex className="w-4/5 gap-6">
                        <Typography.Text>Conservação</Typography.Text>
                        <Progress
                            className="w-2/5"
                            percent={props.vehicle.consevation}
                            strokeColor={defineColor(79)}
                        />
                    </Flex>
                    <Button
                        type="primary"
                        onClick={() => props.showCardDetails(props.vehicle)}
                        className="bg-blue-500 justify-end h-10 text-base"
                    >
                        Ver Detalhes
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
};
