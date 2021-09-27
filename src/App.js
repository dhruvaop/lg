import Users from "./components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
          <img
        src="	https://letsgrowmore.in/wp-content/uploads/2021/05/growmore-removebg-preview-300x123.png"/>
            <button className="fetchbtn" onClick={this.updateState}>
              Get Users
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <footer className="footer">
          <h1>Created By <a href="https://www.linkedin.com/in/dhruva-bhattacharya/" target="_blank">Dhruva Bhattacharya</a> | Copyright © All Rights Reserved! </h1>
        </footer>
      </>
    );
  }
}

export default App;
