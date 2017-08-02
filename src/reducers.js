export const initialState = {
    photos: [],
    waiting: false
};

export default (state, {type, waiting, photos}) => {
  switch(type) {
    case "LOADING":
      return {
        ...state,
        waiting
      };
    case "SET_PHOTOS":
      return {
        ...state,
        photos
      };
    default:
      return state;
  }
};
