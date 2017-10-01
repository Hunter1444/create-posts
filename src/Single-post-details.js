import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SinglePostDetails extends Component {
  render() {
    let title = this.props.location.title;
    if(title === undefined) title = "Пост не найден";

    return (
      <div className="single-post single-post_without-hover">
        <div className="container">
          <Link className="single-post__previous" to="/">Назад</Link>
          <h2 className="single-post__header">{title}</h2>
          <p className="single-post__paragraph">{this.props.location.description}</p>
        </div>
      </div>
    );
  }
}

export default SinglePostDetails;
