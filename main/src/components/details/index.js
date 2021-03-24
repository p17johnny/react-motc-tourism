import { Carousel, Divider } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import { useStore } from "react-redux";

const contentStyle = {
  height: "350px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#000000",
  // background: "#364d79",
};

const Details = () => {
  const store = useStore();

  const clickToGMap = () => {
    const lat = store.getState().ptx.Position.PositionLat;
    const lng = store.getState().ptx.Position.PositionLon;
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <div>
      <Carousel autoplay dotPosition="bottom">
        {store.getState().ptx.Picture?.PictureUrl1 ? (
          <div>
            <img
              src={store.getState().ptx.Picture?.PictureUrl1}
              style={contentStyle}
              alt="圖片一"
            />
          </div>
        ) : (
          <div>
            <img src="/resources/images/noImg.png" style={contentStyle} />
          </div>
        )}
        {store.getState().ptx.Picture?.PictureUrl2 && (
          <div>
            <img
              src={store.getState().ptx.Picture?.PictureUrl2}
              style={contentStyle}
              alt="圖片二"
            />
          </div>
        )}
        {store.getState().ptx.Picture?.PictureUrl3 && (
          <div>
            <img
              src={store.getState().ptx.Picture?.PictureUrl3}
              style={contentStyle}
              alt="圖片三"
            />
          </div>
        )}
      </Carousel>
      <Divider plain>詳細資訊</Divider>
      <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: "更多" }}>
        {store.getState().ptx?.Description ||
          store.getState().ptx?.DescriptionDetail ||
          "沒有資料"}
      </Paragraph>

      <div>
        <div className="mb-3">
          <div className="bg-light text-gray-6 text-uppercase px-3 py-1 mb-2">
            景點資訊
          </div>
          <div className="table-responsive">
            <table className="table table-borderless text-gray-6 mb-0">
              <tbody>
                <tr>
                  <td width="100px">開放時間</td>
                  <td className="text-left">
                    <p>{store.getState().ptx?.OpenTime || "無資料"}</p>
                  </td>
                </tr>
                <tr>
                  <td width="100px">景點地址</td>
                  <td className="text-left">
                    {store.getState().ptx?.Position?.PositionLat &&
                    store.getState().ptx?.Position?.PositionLon ? (
                      <a onClick={() => clickToGMap()} className="text-primary">
                        {store.getState().ptx?.Address || "無資料"}
                      </a>
                    ) : (
                      <span>{store.getState().ptx?.Address || "無資料"}</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td width="100px">交通方式</td>
                  <td className="text-left">
                    <Paragraph
                      ellipsis={{ rows: 4, expandable: true, symbol: "更多" }}
                    >
                      {store.getState().ptx?.TravelInfo || "沒有資料"}
                    </Paragraph>
                  </td>
                </tr>
                <tr>
                  <td width="100px">活動網址</td>
                  <td className="text-left">
                    {store.getState().ptx?.WebsiteUrl ? (
                      <a
                        href={store.getState().ptx?.WebsiteUrl}
                        target="_blank"
                        title="點我"
                        className="text-primary"
                      >
                        點我
                      </a>
                    ) : (
                      "無資料"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
