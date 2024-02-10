import { Col, Row, Typography } from "antd";
import React from "react";
import { ImDroplet } from "react-icons/im";

export const Header: React.FC = () => {
    return (
        <Row className="bg-blue-400 h-16 flex flex-row justify-center items-center px-24">
            <Col className="flex items-center gap-2">
                <ImDroplet size="30" color="white" />
                <Typography.Text className="text-white text-4xl font-bold">
                    AUTO HK
                </Typography.Text>
            </Col>
        </Row>
    );
};
