import React, { Component } from "react";
import PostCard from "../PostCard";
import image from "../../media/image-placeholder.svg";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (!this.props.postsReducer || !this.props.postsReducer.list) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          {this.props.postsReducer.list.map(element => (
            <PostCard
              key={element._id}
              image={element.media.path}
              title={element.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
