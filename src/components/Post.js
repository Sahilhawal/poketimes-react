import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.id);
  };
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapPropsToState = dispatch => {
  return {
    deletePost: id => {
      dispatch({ type: "DELETE_POST", id: id });
    }
  };
};
export default connect(mapStateToProps, mapPropsToState)(Post);
