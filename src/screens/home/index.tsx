import { Checkbox, Col, Flex, Row, Typography } from "antd";
import React from "react";
import Chart from "react-google-charts";
import DoubleArrow from "../../assets/icons/DoubleArrow";
import DownArrow from "../../assets/icons/DownArrow";
import UpArrow from "../../assets/icons/UpArrow";
import { Card } from "../../components/Card";

const { Text } = Typography;

const example = [
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <UpArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <DownArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <UpArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <DownArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <UpArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <DownArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <UpArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <DownArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <UpArrow size="18" />,
  },
  {
    category: "Alimentação",
    description: "Supermercado Muffato",
    createAt: "20/03/2023",
    value: 100,
    type: <DownArrow size="18" />,
  },
];

const data = [
  ["Resumo", "valor"],
  ["Entrada", 1500.0],
  ["Saida", 350.85],
];

export const Home: React.FC = () => {
  const handleAddInput = () => {
    alert("Nova Entrada");
  };
  const handleAddOutput = () => {
    alert("Nova Saida");
  };

  return (
    <Flex className="p-16 gap-10 h-screen bg-slate-50 font-sans">
      <Flex className="gap-16" vertical>
        <Flex className="gap-16">
          <Card
            onClick={handleAddInput}
            type="Entradas"
            value={1500.0}
            icon={<UpArrow size="25" />}
          />
          <Card
            onClick={handleAddOutput}
            type="Saidas"
            value={350.85}
            icon={<DownArrow size="25" />}
          />
          <Card type="Total" value={1149.15} icon={<DoubleArrow />} />
        </Flex>
        <Col className="w-full bg-white h-full py-6 px-6 shadow-lg rounded-xl font-body">
          <Row className="h-12 px-2 items-center font-bold hover:cursor-default">
            <Col span={1}></Col>
            <Col span={3}>
              <Text>Categoria</Text>
            </Col>
            <Col span={13}>
              <Text>Descrição</Text>
            </Col>
            <Col span={3}>
              <Text>Valor</Text>
            </Col>
            <Col span={3}>
              <Text>Data</Text>
            </Col>
            <Col span={1}>
              <Text>Tipo</Text>
            </Col>
          </Row>
          <Col span={24} className="h-[calc(100%-48px)] overflow-y-scroll">
            {example.map((item) => (
              <Row className="h-10 px-2 my-2 items-center hover:bg-gray-100 hover:cursor-default">
                <Col span={1}>
                  <Checkbox />
                </Col>
                <Col span={3}>
                  <Text>{item.category}</Text>
                </Col>
                <Col span={13}>
                  <Text>{item.description}</Text>
                </Col>
                <Col span={3}>
                  <Text>R$ {item.value}</Text>
                </Col>
                <Col span={3}>
                  <Text>{item.createAt}</Text>
                </Col>
                <Col span={1} className="">
                  <div className="h-4/5 w-4/5">{item.type}</div>
                </Col>
              </Row>
            ))}
          </Col>
        </Col>
      </Flex>
      <Flex
        className="bg-white shadow-lg gap-4 w-full p-10 rounded-xl hover:cursor-default"
        vertical
      >
        <div className="bg-sky-800 p-6 rounded-xl w-full h-1/4">
          <Flex
            vertical
            className="text-white text-2xl justify-between h-full rounded-lg"
          >
            <p>1234 1234 1234 1234</p>
            <p className="text-xl">Diogo Rodrigues dos Santos</p>
            <Flex>
              <p className="text-base w-full ">vencimento 12/2028</p>
              <p className="text-base w-full ">conta 12345-0</p>
            </Flex>
          </Flex>
        </div>

        <Flex
          className="p-6 w-full h-1/4 gap-1 border-solid border-2 rounded-xl border-gray-150"
          vertical
        >
          <Row className="font-bold">
            <Col span={16}>Moeda</Col>
            <Col span={8}>Valor</Col>
          </Row>
          <Col className="w-full gap-3">
            <Row>
              <Col span={16}>USD</Col>
              <Col span={8}>R$ 4,9064 </Col>
            </Row>
            <Row>
              <Col span={16}>EUR</Col>
              <Col span={8}>R$ 5,3467</Col>
            </Row>
            <Row>
              <Col span={16}>GBP</Col>
              <Col span={8}>R$ 6,1125</Col>
            </Row>
            <Row>
              <Col span={16}>JPY</Col>
              <Col span={8}>R$ 0,03279</Col>
            </Row>
            <Row>
              <Col span={16}>CHF</Col>
              <Col span={8}>R$ 5,5393 </Col>
            </Row>
            <Row>
              <Col span={16}>CAD</Col>
              <Col span={8}>R$ 3,5757 </Col>
            </Row>
          </Col>
        </Flex>
        <Flex className="w-full h-2/4 p-6">
          <Chart
            className=""
            data={data}
            chartType="Bar"
            width={"100%"}
            height={"100%"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
