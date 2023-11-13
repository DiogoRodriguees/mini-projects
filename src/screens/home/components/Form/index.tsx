import { Button, Checkbox, Form, FormInstance, Input, Row } from "antd";
import { FieldType } from "../../../../helpers/types";

type FormAddCarProps = {
    handleSubmit: (values: FieldType) => void;
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

            <Form.Item
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
