import React from "react";
import style from "./style.module.scss";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import { useDispatch } from "react-redux";

const Attraction = ({ data, handleClickAttraction }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(data);
    dispatch({ type: "SET_ATTR", payload: data });
    handleClickAttraction();
  };

  return (
    <div className="col-md-3 mb-5">
      <div
        className={`d-flex flex-column ${style.head}`}
        style={{
          backgroundImage: data.Picture.PictureUrl1
            ? `url(${data.Picture.PictureUrl1})`
            : "url(resources/images/noImg.png)",
          height: "200px",
        }}
        onClick={handleClick}
      >
        <div className="card-header card-header-flex border-bottom-0">
          <div className="d-flex flex-column justify-content-center">
            <h5 className="mb-0 text-white">{data?.Class1}</h5>
          </div>
        </div>
        <div className="mt-auto mb-2">
          <Title
            className="text-white font-weight-bold pl-4 pr-4"
            level={4}
            ellipsis={{ rows: 2, expandable: false }}
          >
            {data?.Name}
          </Title>
        </div>
      </div>
      <div className="card card-borderless">
        <Paragraph
          ellipsis={{ rows: 5, expandable: true, symbol: "更多" }}
          className="card-body pt-1 pb-1"
          style={{ minHeight: "125px" }}
        >
          {data?.Description || data?.DescriptionDetail || "沒有資料"}
        </Paragraph>
      </div>
    </div>
  );
};

export default Attraction;
