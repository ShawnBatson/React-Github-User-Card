import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uesrs: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/ShawnBatson")
      .then(res => res.json())
      .then(users => this.setState({ users: users }))
      .catch(err => console.lot("you have encountered an error", err));
    console.log("fetched users", res.data);
  }

  render() {
    return <div className="App">{this.users}</div>;
  }
}

export default App;
