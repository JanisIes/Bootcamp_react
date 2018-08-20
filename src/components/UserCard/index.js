import React, { Component } from "react";
import "./index.css";
import image from "../../media/image-placeholder.svg";

class UserCard extends Component {
  render() {
    return (
      <div className="user-wrapper">
        <div className="row">
          <div className="col-md-2">
            <img className="user-image" src={image} />
          </div>
          <div className="col-md-10">
            <div className="user-heading">Name</div>
            <div className="user-description">Desc</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
