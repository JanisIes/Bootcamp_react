import React, { Component } from "react";
import Posts from "../Posts";
import UserList from "../UserList";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row mt-5 mx-auto">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
