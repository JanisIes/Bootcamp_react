import React, { Component } from "react";
import "./index.css";

class PostCard extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="card">
          <img className="card-img-top" src={this.props.image} />
          <div className="card-body">
            <h1 className="card-title">{this.props.title}</h1>
            <span className="card-text">{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
