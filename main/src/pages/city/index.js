import React, { useEffect, useState } from "react";
import { Carousel, Divider, message, Modal } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useStore } from "react-redux";
import { loadCity } from "../../redux/ptx/actions";
import Attraction from "../../components/attraction";
import Details from "../../components/details";
import InfiniteScroll from "react-infinite-scroller";
import { useParams } from "react-router";

const contentStyle = {
  // height: "160px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const products = {
  height: "35vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const City = () => {
  const { city } = useParams();
  const dispatch = useDispatch();
  const store = useStore();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [open, setOpen] = useState(false);

  const load = () => {
    dispatch(loadCity(city, data.length)).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        if (res.data.length < 30) {
          setHasMore(false);
        }
        setData(data.concat(res.data));
      } else {
        message.error("無法讀取ptx資料。");
      }
    });
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={load}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {/* <Button onClick={() => console.log(data)}>click</Button> */}
        <div className="row">
          {data.map((e) => (
            <Attraction data={e} handleClickAttraction={() => setOpen(true)} />
          ))}
        </div>
      </InfiniteScroll>
      <Modal
        title={store.getState().ptx?.Name}
        visible={open}
        maskClosable="true"
        footer={null}
        onCancel={() => setOpen(false)}
        style={{ top: 10 }}
      >
        <Details />
      </Modal>
    </>
  );
};

export default City;
