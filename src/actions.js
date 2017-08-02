export const loading = (waiting = true) => ({
  type: "LOADING",
  waiting
});

export const setPhotos = (photos) => ({
  type: "SET_PHOTOS",
  photos
});

export const getPhotos = () => dispatch => {
  // set a spinner
  dispatch(loading());
  setTimeout(() => fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(photos => {
      // do something with results
      dispatch(setPhotos(photos));
      // stop spinner
      dispatch(loading(false));
    }), 2000);
}
