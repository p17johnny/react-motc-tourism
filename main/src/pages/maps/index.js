import React, { useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";
import markerlogo from "../../images/smallMarkerLogo.png";
import selectedMarker from "../../images/smallSelectedMarker.png";
// import markerlogo from "../../images/smallMarkerLogo2.png";
// import selectedMarker from "../../images/smallSelectedMarker2.png";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useStore } from "react-redux";
import { Button } from "antd";
import { loadMap } from "../../redux/ptx/actions";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import { CloseOutlined } from "@ant-design/icons";

const Map = ReactMapboxGl({
  minZoom: 8,
  accessToken:
    "pk.eyJ1IjoicDE3am9obm55IiwiYSI6ImNrNnZrdmhuazAxZzkzZ291dWVxYzZza2sifQ.hpQXThjlW9k0bbYc5CYNlA",
});

const image = new Image();
image.src = markerlogo;
const images = ["londonCycle", image];

const image2 = new Image();
image2.src = selectedMarker;
const images2 = ["londonCycle2", image2];

const styles = {
  clusterMarker: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    border: "2px solid #56C498",
    cursor: "pointer",
  },
  marker: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #C9C9C9",
  },
  selectedMarker: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #C9C9C9",
  },
};

const MapPage = () => {
  const [selected, setSelected] = useState(null);
  const [mapSetting, setMapSetting] = useState(null);
  const [data, setData] = useState([]);
  const [center, setCenter] = useState([120.6935087, 24.1470135]);
  const [zoom, setZoom] = useState([15]);
  const dispatch = useDispatch();
  const [mapProps, setMapProps] = useState({
    center: [120.6935087, 24.1470135],
    zoom: [15],
  });
  const store = useStore();
  const [moveCenter, setMoveCenter] = useState({
    lng: 120.6935087,
    lat: 24.1470135,
  });

  const onMarkerClick = (id, name) => {
    console.log(id, name);
    console.log("name:", name);
    console.log(
      "travelInfo:",
      data[data.findIndex((e) => e.ID === id)]?.TravelInfo,
      typeof data[data.findIndex((e) => e.ID === id)]?.TravelInfo
    );
    console.log(
      "Address:",
      data[data.findIndex((e) => e.ID === id)]?.Address,
      typeof data[data.findIndex((e) => e.ID === id)]?.Address
    );

    // this.setState({
    //   selected: {
    //     name: name,
    //     lat: this.props.data[e].Position.PositionLat,
    //     lng: this.props.data[e].Position.PositionLon,
    //   },
    //   center: [
    //     this.props.data[e].Position.PositionLon,
    //     this.props.data[e].Position.PositionLat,
    //   ],
    //   zoom: [16],
    // });
    // setCenter([
    //   data[data.findIndex((e) => e.ID === id)].Position.PositionLon,
    //   data[data.findIndex((e) => e.ID === id)].Position.PositionLat,
    // ]);
    setSelected({
      name: name,
      position: [
        data[data.findIndex((e) => e.ID === id)].Position.PositionLon,
        data[data.findIndex((e) => e.ID === id)].Position.PositionLat,
      ],
      travelInfo: data[data.findIndex((e) => e.ID === id)]?.TravelInfo || "",
      address: data[data.findIndex((e) => e.ID === id)]?.Address || "",
      openTime: data[data.findIndex((e) => e.ID === id)]?.OpenTime || "",
    });
    setMapProps({
      center: [
        data[data.findIndex((e) => e.ID === id)].Position.PositionLon,
        data[data.findIndex((e) => e.ID === id)].Position.PositionLat,
      ],
      zoom: [18],
    });
  };

  const onAgainClick = () => {
    setMapProps({
      center: selected.position,
      zoom: [16],
    });
  };

  useEffect(() => {
    dispatch(loadMap()).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.log("無法讀取ptx資料。");
      }
    });
  }, []);

  const clickToGMap = () => {
    const lat = selected.position[1];
    const lng = selected.position[0];
    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  const clusterMarker = (coordinates, pointCount) => (
    <Marker coordinates={coordinates} style={styles.clusterMarker}>
      {pointCount}
    </Marker>
  );

  return (
    <div>
      {data.length > 2 ? (
        <Map
          style="mapbox://styles/p17johnny/ckch5h95z1ra21jmhwxkwt7u7"
          containerStyle={{
            height: "calc(100vh - 158px)",
            width: "98vw",
          }}
          center={mapProps.center}
          zoom={mapProps.zoom}
          // onClick={() => setSelected(null)}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{
              "icon-image": "londonCycle",
              "icon-anchor": "bottom",
              "text-field": ["get", "name"],
              "text-size": 12,
              "text-anchor": "top",
            }}
            images={images}
          >
            {data.map((e) => (
              <Feature
                key={e.ID}
                properties={{ name: e.Name }}
                coordinates={[e.Position.PositionLon, e.Position.PositionLat]}
                onClick={() => onMarkerClick(e.ID, e.Name)}
              />
            ))}
          </Layer>

          {selected && (
            <Layer
              type="symbol"
              id="marker2"
              layout={{
                "icon-image": "londonCycle2",
                "icon-anchor": "bottom",
                "text-field": ["get", "clickname"],
                "text-size": 12,
                "text-anchor": "top",
              }}
              images={images2}
            >
              <Feature
                properties={{ clickname: selected.name }}
                onClick={onAgainClick}
                coordinates={selected.position}
                // onMouseEnter={this.onToggleHover.bind(this, "pointer")}
                // onMouseLeave={this.onToggleHover.bind(this, "")}
              />
            </Layer>
          )}

          {selected ? (
            <Popup
              coordinates={selected?.position}
              offset={{
                "bottom-left": [12, -38],
                bottom: [0, -38],
                "bottom-right": [-12, -38],
              }}
            >
              <div style={{ maxWidth: "300px" }}>
                <div className="row ml-0 mr-5">
                  <h4>{selected?.name}</h4>
                  <Button
                    onClick={() => setSelected(null)}
                    icon={<CloseOutlined />}
                    shape="circle"
                    style={{ position: "absolute", right: "20px" }}
                  />
                </div>

                <Paragraph>
                  <b>交通參考：</b> {selected?.travelInfo || "無交通參考資料"}
                </Paragraph>
                <Paragraph>
                  <b>開放時間：</b> {selected?.openTime || "無營業時間資料"}
                </Paragraph>
                <Text>
                  <b>GoogleMap連結：</b>&nbsp;
                  <a onClick={() => clickToGMap()} className="text-primary">
                    {selected?.address || "無地址參考資料"}
                  </a>
                </Text>
              </div>
            </Popup>
          ) : null}
        </Map>
      ) : null}
    </div>
  );
};
export default MapPage;
