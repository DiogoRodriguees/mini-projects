import { Button, Flex, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { CardList } from "../../../components/CardList";
import { SearchGeneric } from "../../../components/Search";
import { FieldType, ListCardProps } from "../../../helpers/types";
import { FormAddCar } from "../components/Form";

export const ListVehicle: React.FC<ListCardProps> = ({ list }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [form] = useForm();

    const handleSubmit = (values: FieldType) => {
        console.log(values);
        form.resetFields();
        setActiveModal(false);
    };

    return (
        <Flex vertical className="gap-6 h-full">
            <Flex className="justify-start px-4">
                <SearchGeneric />

                <Modal
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

            <CardList children={list} />

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
