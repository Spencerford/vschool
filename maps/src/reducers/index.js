let defaultState = {
  lat: 40.7608,
  lng: -111.8910,
  markers: [
    {
      position: {
        lat: 40.770743,
        lng: -111.885062
      },
      key: `V School`,
      defaultAnimation: 2,
      description: ""
    }
  ]
}

const mainReducer = (state = defaultState, action) => {
if (action.type === "SET_LAT_AND_LNG") {
  return {
    ...state,
    lat: action.lat,
    lng: action.lng
  }
} else {
  return {
    ...state
  }
}
}

export default mainReducer;
