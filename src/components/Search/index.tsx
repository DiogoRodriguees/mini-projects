import { Input } from "antd";
import React, { useEffect, useState } from "react";

export const SearchGeneric: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);
    return (
        <Input
            placeholder="Pesquisar Veículo"
            defaultValue={""}
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-lg px-4 h-10 w-ful"
        />
    );
};
