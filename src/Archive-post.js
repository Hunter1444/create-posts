import React, { Component } from 'react';
import SinglePost from './Single-post';
import { connect } from 'react-redux';

class ArchivePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePosts: 1
    }
  }

  showMore(){
    let number = Number(this.state.activePosts);
    number = number + 1;
    this.setState({
      activePosts: number
    })
  }

  render() {
    let that = this;
    let a = 0;
    let b = 1;

    let postList = this.props.PostList.map(function(item, index){

      if(a === 3){
        a = 0;
        b++;
      };
      a++;

      if(that.state.activePosts >= b){
        return <SinglePost key={index} data={b} description={item.description} title={item.title}/>
      } else{
        return false
      }

    });

    let btn;
    if(that.state.activePosts < b) btn = <button className="single-post__show-more" onClick = {this.showMore.bind(this)} >Показать еще</button>;
    return (
      <div className="archive-post">
        {postList}
        <div className="container">
          {btn}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    PostList: state
  }),
)(ArchivePost)
