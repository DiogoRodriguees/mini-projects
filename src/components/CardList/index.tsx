import { Flex } from "antd";
import { CardProps, VehicleProps } from "../../helpers/types";
import { CardVehicle } from "../CardVehicle";

export const CardList: React.FC<CardProps> = ({ vehicles, showDetails }) => {
    return (
        <Flex vertical className="h-5/6 gap-6 px-4 overflow-y-scroll ">
            {vehicles.map((vehicle: VehicleProps) => (
                <CardVehicle vehicle={vehicle} showDetails={showDetails} />
            ))}
        </Flex>
    );
};
