import { Button, Checkbox, Form, FormInstance, Input, Row, Slider } from "antd";
import { VehicleProps } from "../../../../helpers/types";

type FormAddCarProps = {
    handleSubmit: (values: VehicleProps) => void;
    setActiveModal: (status: boolean) => void;
    form: FormInstance;
};

export const FormAddCar: React.FC<FormAddCarProps> = ({
    handleSubmit,
    setActiveModal,
    form,
}) => {
    const closeModal = () => {
        form.resetFields();
        setActiveModal(false);
    };
    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
                mode: "",
                year: 2000,
                brand: "",
                conservation: 0,
                description: "",
                sold: false,
            }}
        >
            <Form.Item
                name="model"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira o modelo do veiculo!",
                    },
                ]}
            >
                <Input
                    type="text"
                    className="h-10"
                    placeholder="Digite o modelo do vaiculo"
                />
            </Form.Item>

            <Form.Item<number>
                name="year"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira o ano do veiculo!",
                    },
                ]}
            >
                <Input
                    type="number"
                    className="h-10"
                    placeholder="Digite o ano do vaiculo"
                />
            </Form.Item>

            <Form.Item
                name="brand"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira a fabricante do veiculo!",
                    },
                ]}
            >
                <Input
                    type="text"
                    className="h-10"
                    placeholder="Digite a fabricante do vaiculo"
                />
            </Form.Item>
            <Form.Item
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira a descrição do veiculo!",
                    },
                ]}
            >
                <Input
                    type="text"
                    className="h-10"
                    placeholder="Digite uma descrição para o veiculo"
                />
            </Form.Item>
            <Form.Item
                name="conservation"
                rules={[
                    {
                        required: true,
                        message:
                            "Por favor, insira o nivel de conservação do veiculo!",
                    },
                ]}
            >
                <Slider />
            </Form.Item>

            <Form.Item name="sold" valuePropName="checked">
                <Checkbox>Marcar como vendido</Checkbox>
            </Form.Item>

            <Row className="flex justify-end gap-2" gutter={20}>
                <Button key="back" onClick={closeModal}>
                    Cancelar
                </Button>

                <Button key="submit" htmlType="submit">
                    Adicionar
                </Button>
            </Row>
        </Form>
    );
};
