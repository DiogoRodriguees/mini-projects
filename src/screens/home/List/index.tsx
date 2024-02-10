import { Button, Flex, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardVehicle } from "../../../components/CardVehicle";
import { ListCardProps, VehicleProps } from "../../../helpers/types";
import { FormAddVehicle } from "./FormAddVehicle";

export const ListVehicle: React.FC<ListCardProps> = ({ showDetails }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [form] = useForm();
    const [searchContent, setSearchContent] = useState<string>("");
    const [vehicles, setVehicles] = useState<VehicleProps[]>([]);

    const getVehiclesByParams = async () => {
        axios
            .create({ baseURL: "http://localhost:3030", timeout: 1000 })
            .get(`/cars/find?find=${searchContent || ""}`)
            .then((e) => {
                setVehicles(e.data);
            });
    };

    const handleSubmit = (values: VehicleProps) => {
        axios
            .create({ baseURL: "http://localhost:3030", timeout: 1000 })
            .post("/create", { ...values, year: Number(values.year) });

        form.resetFields();
        setActiveModal(false);
        setSearchContent("");
        getVehiclesByParams();
    };

    useEffect(() => {
        getVehiclesByParams();
    }, [searchContent]);

    return (
        <Flex vertical className="gap-6 h-full">
            <Flex className="justify-start px-4">
                <Input
                    placeholder="Pesquisar Veículo"
                    defaultValue={""}
                    onChange={(e) => setSearchContent(e.target.value)}
                    className="text-lg px-4 h-12 w-ful"
                />

                <Modal
                    centered
                    open={activeModal}
                    title="Adicionar veiculo"
                    onCancel={() => setActiveModal(!activeModal)}
                    footer={[]}
                >
                    <FormAddVehicle
                        form={form}
                        handleSubmit={handleSubmit}
                        setActiveModal={setActiveModal}
                    />
                </Modal>
            </Flex>

            <Flex vertical className="h-5/6 gap-6 px-4 overflow-y-scroll ">
                {vehicles.map((vehicle: VehicleProps) => (
                    <CardVehicle vehicle={vehicle} showDetails={showDetails} />
                ))}
            </Flex>

            <Button
                className="bg-blue-500 h-12  ml-4 w-12 text-3xl"
                shape="circle"
                type="primary"
                onClick={() => setActiveModal(!activeModal)}
            >
                +
            </Button>
        </Flex>
    );
};
