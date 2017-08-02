import React, { Component } from 'react';
import './App.css';
import {getPhotos} from "./actions";
import {connect} from "react-redux";

class App extends Component {
  componentDidMount() {
      const {dispatch} = this.props;
      dispatch(getPhotos());
  }

  render() {
    const {waiting, photos} = this.props;
    return (
      <div>
        {waiting ?
          <span>Waiting...</span> :
          photos.map((photo, i) => (
            <img key={i} src={photo.thumbnailUrl} />
          ))
        }
      </div>
    );
  }
}

export default connect(({waiting, photos}) => ({waiting, photos}))(App  );
