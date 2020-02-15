import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";
import styled from "styled-components";

const Step5 = styled.div`
  padding: 3%;
  margin: 2%;
  font-weight: bold;
`;

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

        <Step5>
          <p>
            This is my retrospective: I wish I would have been able to just hit
            the ground running, instead, I was able to use the foundation of
            another resource and got into my groove then. I really do appreciate
            hooks and functional components, so I will never take advantage of
            them again. I feel that hooks are much more clean, and less explicit
            binding required, so that it is much easier to follow the train of
            logic without getting lost.{" "}
          </p>
        </Step5>
      </div>
    );
  }
}

export default App;
