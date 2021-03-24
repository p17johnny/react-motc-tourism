import React, { useState } from "react";
import { Layout, Modal } from "antd";
const { Footer } = Layout;

const MainFooter = () => {
  const [open, setOpen] = useState(false);

  return (
    <Footer style={{ textAlign: "center", height: "60px" }}>
      Ren Design ©2021 Design by{" "}
      <a href="https://www.github.com/p17johnny">Chen Yi Ren</a>
    </Footer>
  );
};

export default MainFooter;
