import { Button, Flex, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardList } from "../../../components/CardList";
import { ListCardProps, VehicleProps } from "../../../helpers/types";
import { FormAddCar } from "../components/Form";

export const ListVehicle: React.FC<ListCardProps> = ({ showDetails }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [form] = useForm();
    const [searchContent, setSearchContent] = useState<string>("");
    const [vehicles, setVehicles] = useState<VehicleProps[]>([]);

    const handleSubmit = (values: VehicleProps) => {
        axios
            .create({ baseURL: "http://localhost:3030", timeout: 1000 })
            .post("/create", { ...values, year: Number(values.year) });

        form.resetFields();
        setActiveModal(false);
    };

    const getVehiclesByParams = async () => {
        axios
            .create({ baseURL: "http://localhost:3030", timeout: 1000 })
            .get(`/cars/find?find=${searchContent}`)
            .then((e) => {
                setVehicles(e.data);
            });
    };

    function handleOnChange(value: string) {
        setSearchContent(value);
        getVehiclesByParams();
    }

    useEffect(() => {
        getVehiclesByParams();
    }, []);

    return (
        <Flex vertical className="gap-6 h-full">
            <Flex className="justify-start px-4">
                <Input
                    placeholder="Pesquisar Veículo"
                    defaultValue={""}
                    onChange={(e) => handleOnChange(e.target.value)}
                    className="text-lg px-4 h-12 w-ful"
                />

                <Modal
                    centered
                    open={activeModal}
                    title="Adicionar veiculo"
                    onCancel={() => setActiveModal(!activeModal)}
                    footer={[]}
                >
                    <FormAddCar
                        form={form}
                        handleSubmit={handleSubmit}
                        setActiveModal={setActiveModal}
                    />
                </Modal>
            </Flex>

            <CardList vehicles={vehicles} showDetails={showDetails} />

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
