import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export const Consumer = Context.Consumer;

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "abc" } },
      { track: { track_name: "xyz" } }
    ],
    heading: "Top 10 Tracks"
  };

  apiKey = process.env.REACT_APP_MUSIXMATCH_API_KEY;

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${this.apiKey}`
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}