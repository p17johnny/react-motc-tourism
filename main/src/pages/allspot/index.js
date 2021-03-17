import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Button, message } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useStore } from "react-redux";
import { loadAll } from "../../redux/ptx/actions";
import Attraction from "../../components/attraction";
import style from "./style.module.scss";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import InfiniteScroll from "react-infinite-scroller";

const Home = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const [ellipsis, setEllipsis] = useState(true);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    console.log(store.getState().ptx.all.length);
    if (store.getState().ptx.all.length < 30) {
      console.log("doDispatch");
      dispatch(loadAll(store.getState().ptx.all.length)).then((res) => {
        if (res.status === 200) {
          setData(res.data);
          dispatch({ type: "SET_ALL_STATE", payload: res.data });
        } else {
          message.error("無法讀取ptx資料。");
        }
      });
    } else {
      console.log("setdata");
      setData(store.getState().ptx.all);
    }
  }, []);

  const load = () => {
    if (store.getState().ptx.all.length <= data.length) {
      console.log(data.length);
      dispatch(loadAll(data.length)).then((res) => {
        if (res.status === 200) {
          if (res.data.length < 30) {
            setHasMore(false);
          }
          // data.push(res.data);
          // res.data.map((e) => setData((m) => [...m, e]));
          // console.log(data);
          // console.log(res.data);
          setData(data.concat(res.data));
          dispatch({ type: "SET_ALL_STATE", payload: data.concat(res.data) });
          // setData(m=>[...m,res.data])
          // setData((m) => [...m, );
          // console.log(res.data);
          // dispatch({ type: "SET_ALL_STATE", payload: res.data });
        } else {
          message.error("無法讀取ptx資料。");
        }
      });
    }
  };

  return (
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
      <Button onClick={() => console.log(store.getState().ptx.all.length)}>
        click
      </Button>
      <div className="row">
        {data.map((e) => (
          <div className="col-md-3 mb-5">
            <div
              className={`d-flex flex-column ${style.head}`}
              style={{
                backgroundImage: e.Picture?.PictureUrl1
                  ? `url(${e.Picture.PictureUrl1})`
                  : "url(resources/images/noImg.png)",
                height: "200px",
              }}
            >
              <div className="card-header card-header-flex border-bottom-0">
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="mb-0 text-white">{e?.Class1}</h5>
                </div>
              </div>
              <div className="mt-auto mb-2">
                <Title
                  className="text-white font-weight-bold pl-4 pr-4"
                  level={4}
                  ellipsis={{ rows: 2, expandable: false }}
                >
                  {e?.Name}
                </Title>
              </div>
            </div>
            <div className="card card-borderless">
              <Paragraph
                ellipsis={{ rows: 5, expandable: true, symbol: "more" }}
                className="card-body pt-1 pb-1"
                style={{ minHeight: "125px" }}
              >
                {e?.Description || "沒有資料"}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Home;
