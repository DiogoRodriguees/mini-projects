import { Card } from "antd";
import React, { ReactElement } from "react";

type CardProps = {
    children: ReactElement;
};

export const CardGeneric: React.FC<CardProps> = ({ children }) => {
    return (
        <Card className="bg-white w-full px-10 py-8 flex flex-col justify-between rounded-md shadow-md ">
            {children}
        </Card>
    );
};
