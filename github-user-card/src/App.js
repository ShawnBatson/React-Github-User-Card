import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";
import styled from "styled-components";

class App extends React.Component {
  state = {
    users: [],
    followers: []
  };

  componentDidMount() {
    console.log("Component Did Mount!");
    axios
      .get("https://api.github.com/users/ShawnBatson")
      .then(res => {
        this.setState({ user: res.data });
        console.log("first fetch invoked", res.data);
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/ShawnBatson/followers")
      .then(res => {
        this.setState({ followers: res.data });
        console.log("second fetch invoked", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Shawn Batson's GitHub Followers!</h1>
        <h2>Followers</h2>
        <UserCard followers={this.state.followers} user={this.state.users} />
      </div>
    );
  }
}

export default App;
