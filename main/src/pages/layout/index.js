import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import "antd/dist/antd.css";
import MenuTop from "../../components/menu";
import MainFooter from "../../components/footer";
const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <MenuTop />
      <Content className="p-4" style={{ minHeight: "calc(100vh - 110px)" }}>
        {children}
      </Content>
      <MainFooter />
    </Layout>
  );
};

export default MainLayout;
