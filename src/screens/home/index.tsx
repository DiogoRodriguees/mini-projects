import { Col, Flex } from "antd";
import { useState } from "react";
import { CardDetail } from "../../components/CardDetail";
import { Header } from "../../components/Header";
import { VehicleProps } from "../../helpers/types";
import { ListVehicle } from "./List";

const vehicleExampleEmpity: VehicleProps = {
    description: "",
    model: "",
    brand: "",
    sold: false,
    year: 0,
    conservation: 79,
};

export const Home: React.FC = () => {
    const [cardDetail, setCardDetail] = useState(false);
    const [vehicleDetail, setVehicleDetail] =
        useState<VehicleProps>(vehicleExampleEmpity);

    const closeCardDetail = () => {
        setCardDetail(false);
    };

    const setCardDetailView = (vechicle: VehicleProps) => {
        setVehicleDetail(vechicle);
        setCardDetail(true);
    };

    return (
        <>
            <Header />
            <Col className="max-h-[calc(100vh-64px)] w-screen px-20">
                <Flex className="w-full h-full bg-white">
                    <Col className="w-1/2 py-8 px-6 h-full">
                        <ListVehicle showDetails={setCardDetailView} />
                    </Col>

                    <Col className="w-1/2 h-full py-8 px-6">
                        {cardDetail && (
                            <CardDetail
                                vehicle={vehicleDetail}
                                closeCard={closeCardDetail}
                            />
                        )}
                    </Col>
                </Flex>
            </Col>
        </>
    );
};
