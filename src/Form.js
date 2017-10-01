import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

  createPost(e){
    e.preventDefault();

    let title = this.refs.title;
    let description = this.refs.text;

    if(this.validateForm(title, description)){
      let obj = {
        title: title.value,
        description: description.value
      }
      this.props.createPost(obj);

      title.value = "";
      description.value = "";
    }
  }

  validateForm(title, description){
    console.dir(arguments);
    [].forEach.call(arguments, function(item){
      if(item.value.length > 0){
        item.style.borderColor = "#bababa"
      } else{
        item.style.borderColor = "red"
      }
    })

    if(title.value.length > 0 && description.value.length > 0){
      return true;
    } else{
      return false;
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="container">
          <form onSubmit={this.createPost.bind(this)} className="form">
            <span className="form__header">Форма создания поста</span>
            <input ref="title" className="form__input" type="text" placeholder="Название поста"/>
            <textarea ref="text" className="form__textarea" placeholder="Содержание поста"></textarea>
            <input className="form__submit" value="Создать пост" type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    PostList: state
  }),
  dispatch => ({
    createPost: (post) =>{
      dispatch({ type: 'CREATE_POST', payload: post});
    }
}))(Form)
