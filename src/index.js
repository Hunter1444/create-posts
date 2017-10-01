import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SinglePostDetails from './Single-post-details';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

let defaultPosts = [
  {
    title: 'пост 1',
    description: 'мини-текст тут'
  },
  {
    title: 'пост 2',
    description: 'мини-текст тут 2'
  },
]

let savedPosts = localStorage.getItem('posts');
if(savedPosts !== null){
  defaultPosts = JSON.parse(savedPosts);
}

function reducer(state = defaultPosts, action){
  if(action.type === "CREATE_POST"){
    return  [
      action.payload,
      ...state
    ]
  } else{
    return state
  }
}

let store = createStore(reducer);

store.subscribe(function(){
  localStorage.setItem('posts', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/:post" component={SinglePostDetails}/>
      </div>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
