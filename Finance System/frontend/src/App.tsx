import { Flex, Layout, Row } from "antd";
import React from "react";
import { IoAnalyticsSharp, IoHomeOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { Home } from "./screens/home";
const { Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="h-screen bg-white w-screen font-body">
      <Sider
        // className="bg-blue-500"
        // style={{
        //     backgroundColor: "#10b981",
        //     width: "20%",
        // }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Flex vertical className="justify-between h-full py-10">
          <Flex vertical className="gap-4">
            <Flex className="items-center w-full px-8">
              {/* <img src={logo} alt="logo" className="h-24 w-24" /> */}
              <h2 className="text-white text-2xl font-bold">Finance</h2>
            </Flex>
            <Flex vertical className="gap-3">
              <Row className="border-solid border-white hover:cursor-pointer  px-8 gap-3 h-10 rounded-md items-center ">
                <IoHomeOutline size="20" className="text-white" />
                <p className="text-white text-lg">Home</p>
              </Row>
              <Row className="border-solid border-white hover:cursor-pointer  px-8 gap-3 h-10 rounded-md items-center ">
                <SiSimpleanalytics size="20" color="white" />
                <p className="text-white text-lg">Relatórios</p>
              </Row>
              <Row className="border-solid border-white hover:cursor-pointer  px-8 gap-3 h-10 rounded-md items-center ">
                <IoAnalyticsSharp size="20" color="white" />
                <p className="text-white text-lg">Operações</p>
              </Row>
            </Flex>
          </Flex>
          <Row className="border-solid border-white hover:cursor-pointer  px-8 gap-3 h-10 rounded-md items-center ">
            <RiLogoutBoxLine size="20" color="white" />
            <p className="text-white text-lg">Sair</p>
          </Row>
        </Flex>
      </Sider>

      <Layout>
        <Layout.Content>
          <Home />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;
