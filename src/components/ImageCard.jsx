import React from "react";
import LikeBtn from "./LikeBtn";

export default class ImageCard extends React.Component {
  state = {
    data: {
        photos: [],
    },
    IsPending: true
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=57dQOEFpl20leOFXF3ksIqqclJt9ufWpF8OOqTvi`)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json()
    .then((data) => {
          this.setState({ data: data });
          this.setState({ IsPending: false})
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  render() {
    return (
      this.state.IsPending ? <div className="loader"></div> :
    <div className="card">
        <img src={this.state.data.url} alt="N/A"/> 
        <div className="container overlay">
        <h1>{this.state.data.title}</h1>
        <p className="explanation">{this.state.data.explanation}</p>
        <LikeBtn />
      </div>
    </div>
    )
  }
}
