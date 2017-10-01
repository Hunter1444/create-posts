import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SinglePost extends Component {
  render() {
    let description = this.props.description;
    if(description.length > 255) description = description.slice(0,255) + '...';
    return (
      <div data-block={this.props.data} className="single-post">
        <div className="container">
          <h2 className="single-post__header"><Link to={{
            pathname: this.props.title,
            title: this.props.title,
            description: this.props.description
          }}>{this.props.title}</Link></h2>
          <p className="single-post__paragraph">{description}</p>
        </div>
      </div>
    );
  }
}

export default SinglePost;
