import React, { useEffect } from "react";
import classNames from "classnames";
import { Button, Menu } from "antd";
import style from "./style.module.scss";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { useHistory } from "react-router";

const MenuTop = () => {
  const history = useHistory();

  return (
    <div className={classNames(`${style.menu}`, "white")}>
      <div className={`${style.logoContainer} mr-auto`}>
        <Button
          type="link"
          className={style.logo}
          onClick={() => history.push("/")}
        >
          <img
            src="/resources/images/renDesignLogo.png"
            className="mr-2"
            alt="RenDesign"
            width="80px"
          />
        </Button>
      </div>
      <div className={`${style.navigation} mr-5 d-xl-block d-none`}>
        <Menu mode="horizontal" subMenuCloseDelay={0.05}>
          <Menu.Item key="0">
            {/* {icon && <span className={`${icon} ${style.icon}`} />} */}
            <span
              className={style.title}
              onClick={() => history.push("/scenicSpot")}
            >
              全臺景點
            </span>
            {/* {count && <span className="badge badge-success ml-2">{count}</span>} */}
          </Menu.Item>
          <SubMenu
            key="SubMenu"
            // overflowedIndicator={<DownOutlined />}
            title={<span className={style.title}>地區分類</span>}
          >
            <SubMenu
              key="north"
              title={<span className={style.title}>北部地區</span>}
            >
              <Menu.ItemGroup title="北部">
                <Menu.Item
                  key="Keelung"
                  onClick={() => history.push("/scenicSpot/Keelung")}
                >
                  基隆市
                </Menu.Item>
                <Menu.Item
                  key="Taipei"
                  onClick={() => history.push("/scenicSpot/Taipei")}
                >
                  臺北市
                </Menu.Item>
                <Menu.Item
                  key="NewTaipei"
                  onClick={() => history.push("/scenicSpot/NewTaipei")}
                >
                  新北市
                </Menu.Item>
                <Menu.Item
                  key="Taoyuan"
                  onClick={() => history.push("/scenicSpot/Taoyuan")}
                >
                  桃園市
                </Menu.Item>
                <Menu.Item
                  key="YilanCounty"
                  onClick={() => history.push("/scenicSpot/YilanCounty")}
                >
                  宜蘭縣
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="center"
              title={<span className={style.title}>中部地區</span>}
            >
              <Menu.ItemGroup title="中部">
                <Menu.Item
                  key="Taichung"
                  onClick={() => history.push("/scenicSpot/Taichung")}
                >
                  臺中市
                </Menu.Item>
                <Menu.Item
                  key="Hsinchu"
                  onClick={() => history.push("/scenicSpot/Hsinchu")}
                >
                  新竹市
                </Menu.Item>
                <Menu.Item
                  key="HsinchuCounty"
                  onClick={() => history.push("/scenicSpot/HsinchuCounty")}
                >
                  新竹縣
                </Menu.Item>
                <Menu.Item
                  key="MiaoliCounty"
                  onClick={() => history.push("/scenicSpot/MiaoliCounty")}
                >
                  苗栗縣
                </Menu.Item>
                <Menu.Item
                  key="ChanghuaCounty"
                  onClick={() => history.push("/scenicSpot/ChanghuaCounty")}
                >
                  彰化縣
                </Menu.Item>
                <Menu.Item
                  key="NantouCounty"
                  onClick={() => history.push("/scenicSpot/NantouCounty")}
                >
                  南投縣
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="south"
              title={<span className={style.title}>南部地區</span>}
            >
              <Menu.ItemGroup title="南部">
                <Menu.Item
                  key="Tainan"
                  onClick={() => history.push("/scenicSpot/Tainan")}
                >
                  臺南市
                </Menu.Item>
                <Menu.Item
                  key="Kaohsiung"
                  onClick={() => history.push("/scenicSpot/Kaohsiung")}
                >
                  高雄市
                </Menu.Item>
                <Menu.Item
                  key="YunlinCounty"
                  onClick={() => history.push("/scenicSpot/YunlinCounty")}
                >
                  雲林縣
                </Menu.Item>
                <Menu.Item
                  key="ChiayiCounty"
                  onClick={() => history.push("/scenicSpot/ChiayiCounty")}
                >
                  嘉義縣
                </Menu.Item>
                <Menu.Item
                  key="Chiayi"
                  onClick={() => history.push("/scenicSpot/Chiayi")}
                >
                  嘉義市
                </Menu.Item>
                <Menu.Item
                  key="PingtungCounty"
                  onClick={() => history.push("/scenicSpot/PingtungCounty")}
                >
                  屏東縣
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="east"
              title={<span className={style.title}>東部地區</span>}
            >
              <Menu.ItemGroup title="東部">
                <Menu.Item
                  key="HualienCounty"
                  onClick={() => history.push("/scenicSpot/HualienCounty")}
                >
                  花蓮縣
                </Menu.Item>
                <Menu.Item
                  key="TaitungCounty"
                  onClick={() => history.push("/scenicSpot/TaitungCounty")}
                >
                  臺東縣
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <SubMenu
              key="island"
              title={<span className={style.title}>離島地區</span>}
            >
              <Menu.ItemGroup title="離島">
                <Menu.Item
                  key="KinmenCounty"
                  onClick={() => history.push("/scenicSpot/KinmenCounty")}
                >
                  金門縣
                </Menu.Item>
                <Menu.Item
                  key="PenghuCounty"
                  onClick={() => history.push("/scenicSpot/PenghuCounty")}
                >
                  澎湖縣
                </Menu.Item>
                <Menu.Item
                  key="LienchiangCounty"
                  onClick={() => history.push("/scenicSpot/LienchiangCounty")}
                >
                  連江縣
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default MenuTop;
