import { Button, Checkbox, Form, Input, Row } from "antd";
import { FieldType } from "../../../../helpers/types";

type FormAddCarProps = {
    handleSubmit: (values: FieldType) => void;
    setActiveModal: (status: boolean) => void;
};

export const FormAddCar: React.FC<FormAddCarProps> = ({
    handleSubmit,
    setActiveModal,
}) => {
    return (
        <Form
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
            <Form.Item name="model" className="flex flex-col">
                <Input
                    type="text"
                    className="h-10"
                    placeholder="Digite o modelo do vaiculo"
                />
            </Form.Item>

            <Form.Item name="year">
                <Input
                    type="number"
                    className="h-10"
                    placeholder="Digite o ano do vaiculo"
                />
            </Form.Item>

            <Form.Item name="brand">
                <Input
                    type="text"
                    className="h-10"
                    placeholder="Digite a marca do vaiculo"
                />
            </Form.Item>

            <Form.Item name="sold" valuePropName="checked">
                <Checkbox>Marcar como vendido</Checkbox>
            </Form.Item>

            <Row className="flex justify-end gap-2" gutter={20}>
                <Button key="back" onClick={() => setActiveModal(false)}>
                    Cancelar
                </Button>

                <Button key="submit" htmlType="submit">
                    Adicionar
                </Button>
            </Row>
        </Form>
    );
};
