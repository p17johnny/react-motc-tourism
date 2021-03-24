import React, { useState } from "react";
import { Carousel, Divider, message, Modal } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useStore } from "react-redux";
import { loadAll } from "../../redux/ptx/actions";
import Attraction from "../../components/attraction";
import style from "./style.module.scss";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import InfiniteScroll from "react-infinite-scroller";
import Details from "../../components/details";

const Home = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [open, setOpen] = useState(false);

  const load = () => {
    dispatch(loadAll(data.length)).then((res) => {
      if (res.status === 200) {
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

export default Home;
