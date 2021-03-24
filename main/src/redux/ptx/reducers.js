// const initialState = {
//   all: [],
//   city: [],
// };
const initialState = {};

const ptxReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_ALL_STATE": {
    //   console.log(action.payload);
    //   const data = {
    //     all: action.payload,
    //     city: state.city,
    //   };
    //   return data;
    // }
    // case "SET_CITY_STATE":
    //   const data = {
    //     all: state.all,
    //     city: action.payload,
    //   };
    //   return data;
    case "SET_ATTR":
      return action.payload;
    default:
      return state;
  }
};

export default ptxReducer;
