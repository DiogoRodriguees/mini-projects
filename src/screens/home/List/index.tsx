import { Button, Checkbox, Flex, Form, Input, Modal, Row } from "antd";
import { ReactElement, useState } from "react";
import { CardList } from "../../../components/CardList";
import { SearchGeneric } from "../../../components/Search";

type FieldType = {
    model?: string;
    year?: number;
    brand?: string;
};

type ListCardProps = {
    list: ReactElement[];
};

export const List: React.FC<ListCardProps> = ({ list }: ListCardProps) => {
    const [activeModal, setActiveModal] = useState(false);

    const handleSubmit = (values: FieldType) => {
        console.log(values);
    };

    return (
        <>
            <Flex className="justify-start gap-4">
                <SearchGeneric />

                <Modal
                    open={activeModal}
                    title="Adicionar veiculo"
                    onCancel={() => setActiveModal(!activeModal)}
                    footer={[]}
                >
                    <Form
                        name="basic"
                        onFinish={handleSubmit}
                        initialValues={{
                            mode: "",
                            year: 2000,
                            brand: "",
                            sold: false,
                        }}
                    >
                        <Form.Item name="model" className="flex flex-col">
                            <Input type="text" />
                        </Form.Item>

                        <Form.Item name="year">
                            <Input type="number" />
                        </Form.Item>

                        <Form.Item name="brand">
                            <Input type="text" />
                        </Form.Item>

                        <Form.Item
                            name="sold"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8 }}
                        >
                            <Checkbox>Marcar como vendido</Checkbox>
                        </Form.Item>

                        <Row className="flex justify-end gap-2" gutter={20}>
                            <Button
                                key="back"
                                onClick={() => setActiveModal(!activeModal)}
                            >
                                Cancelar
                            </Button>

                            <Button key="submit" htmlType="submit">
                                Adicionar
                            </Button>
                        </Row>
                    </Form>
                </Modal>
            </Flex>
            <CardList children={list} />
            <Button
                className="h-10 w-10 rounded-full text-center text-3xl flex justify-center items-center bg-blue-500"
                type="primary"
                onClick={() => setActiveModal(!activeModal)}
            >
                +
            </Button>
        </>
    );
};
