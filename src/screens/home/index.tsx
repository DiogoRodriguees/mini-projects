import { Col, Flex } from "antd";
import { useState } from "react";
import { Header } from "../../components/Header";
import { CardDetail } from "./CardDetail";
import { CardVehicle } from "./CardVehicle";
import { List } from "./List";

export const Home: React.FC = () => {
    const [cardDetail, setCardDetail] = useState(false);

    const setCardDetailView = () => {
        setCardDetail(!cardDetail);
    };

    const cardListExample = [
        <CardVehicle showCardDetails={() => setCardDetailView()} />,
        <CardVehicle showCardDetails={() => setCardDetailView()} />,
        <CardVehicle showCardDetails={() => setCardDetailView()} />,
    ];
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-64px)] w-screen px-20">
                <Flex className="w-full h-full bg-white">
                    <Col className="w-1/2 py-8 px-6 h-full">
                        <List list={cardListExample} />
                    </Col>
                    <Col className="w-1/2 h-full py-8 px-6">
                        {cardDetail && <CardDetail />}
                    </Col>
                </Flex>
            </div>
        </>
    );
};
