import { Col, Flex } from "antd";
import { useState } from "react";
import { CardDetail } from "../../components/CardDetail";
import { CardVehicle } from "../../components/CardVehicle";
import { Header } from "../../components/Header";
import { VehicleProps } from "../../helpers/types";
import { ListVehicle } from "./List";

const vehicleExample: VehicleProps = {
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora tenetur quam qui pariatur hic assumenda iure neque eos eum earum vero ut labore, incidunt aliquid tempore voluptatibus dicta quo?",
    name: "Focus",
    brand: "Ford",
    year: 2000,
    consevation: 79,
};

const vehicleExampleEmpity: VehicleProps = {
    description: "",
    name: "",
    brand: "",
    year: 0,
    consevation: 0,
};

export const Home: React.FC = () => {
    const [cardDetail, setCardDetail] = useState(false);
    const [vehicleDetail, setVehicle] =
        useState<VehicleProps>(vehicleExampleEmpity);

    const closeCardDetail = () => {
        setCardDetail(false);
    };

    const setCardDetailView = (vechicle: VehicleProps) => {
        setVehicle(vechicle);
        setCardDetail(true);
    };

    const cardListExample = [
        <CardVehicle
            vehicle={vehicleExample}
            showCardDetails={(vehicleParam: VehicleProps) =>
                setCardDetailView(vehicleParam)
            }
        />,
        <CardVehicle
            vehicle={vehicleExample}
            showCardDetails={(vehicleParam: VehicleProps) =>
                setCardDetailView(vehicleParam)
            }
        />,
        <CardVehicle
            vehicle={vehicleExample}
            showCardDetails={(vehicleParam: VehicleProps) =>
                setCardDetailView(vehicleParam)
            }
        />,
        <CardVehicle
            vehicle={vehicleExample}
            showCardDetails={(vehicleParam: VehicleProps) =>
                setCardDetailView(vehicleParam)
            }
        />,
    ];
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-64px)] w-screen px-20">
                <Flex className="w-full h-full bg-white">
                    <Col className="w-1/2 py-8 px-6 h-full">
                        <ListVehicle list={cardListExample} />
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
            </div>
        </>
    );
};
