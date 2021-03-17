import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ptx from "./ptx/reducers";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    ptx,
  });
