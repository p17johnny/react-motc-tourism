import axios from "axios";
import getPTXauth from "../../services/ptxAuth.js";

export const loadAll = (skip) => (dispatch) => {
  return axios
    .get(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${skip}&$format=JSON`,
      {
        headers: getPTXauth(),
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const loadCity = (city, skip) => (dispatch) => {
  return axios
    .get(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30&$skip=${skip}&$format=JSON`,
      {
        headers: getPTXauth(),
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadMap = () => (dispatch) => {
  return axios
    .get(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$select=ID%2CName%2CPosition%2CAddress%2CTravelInfo%2COpenTime&$format=JSON`,
      {
        headers: getPTXauth(),
      }
    )
    .then((res) => {
      dispatch({ type: "SET_MAP", payload: res.data });
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
