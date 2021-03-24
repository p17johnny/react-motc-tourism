import React, { useState } from "react";
import classes from "./style.module.scss";
import Title from "antd/lib/typography/Title";
import { Button, Divider } from "antd";
import { useHistory } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";

const Home = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.fullscreenVideoWrap}>
      <video autoPlay="autoplay" loop="loop" muted>
        <source
          src="https://rensv.synology.me/video/video01.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className={classes.content}>
        <div className={classes.subContent}>
          <Title className="text-white" style={{ fontSize: "64px" }}>
            背上背包去旅行
          </Title>
          <Button
            size="large"
            onClick={() => history.push("/scenicSpot")}
            className="mr-3 bg-transparent text-white"
          >
            開始探索
          </Button>
          <Button
            size="large"
            onClick={() => setOpen(true)}
            className="ml-3 bg-transparent text-white"
          >
            關於本站
          </Button>
        </div>
      </div>
      <Modal
        visible={open}
        onCancel={() => setOpen(false)}
        title=""
        footer={null}
        width="500px"
      >
        <div className="text-center">
          <h1>關於本站</h1>
        </div>
        <Divider plain>參考資料</Divider>
        <div>
          串接資料：
          <a
            href="https://ptx.transportdata.tw/MOTC?t=Tourism&v=2"
            target="_blank"
          >
            MOTC Transport Api
          </a>
        </div>
        <div>
          開發參考：
          <a
            href="https://drive.google.com/file/d/14wpY_xmY1VxlwJQNr1WKE872UdWZ6ft6/view"
            target="_blank"
          >
            Dcard 2021 Web Frontend Intern Homework
          </a>
        </div>
        <div>
          影片來源：
          <a href="https://videohive.net" target="_blank">
            Envato market - Videohive
          </a>
        </div>
        <Divider plain>關於作者</Divider>
        <div>
          Github：
          <a href="https://github.com/p17johnny" target="_blank">
            Github個人資料
          </a>
        </div>
        <div>
          Open source：
          <a
            href="https://github.com/p17johnny/react-motc-tourism"
            target="_blank"
          >
            react-motc-tourism
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
