import React, { useState } from "react";
import { Layout, Modal } from "antd";
const { Footer } = Layout;

const MainFooter = () => {
  const [open, setOpen] = useState(false);

  return (
    <Footer style={{ textAlign: "center", height: "60px" }}>
      Ren Design ©2021 Design by{" "}
      <a href="https://www.github.com/p17johnny">Chen Yi Ren</a> &{" "}
      <a href="#" onClick={() => setOpen(true)}>
        關於此網站
      </a>
      <Modal visible={open} onCancel={() => setOpen(false)} footer={null}>
        helloworld
      </Modal>
    </Footer>
  );
};

export default MainFooter;
