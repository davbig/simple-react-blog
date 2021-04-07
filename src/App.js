import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import Post from './components/Post';
import { Component } from 'react';
import blogData from './blogData';
import Add from './components/Add';

class App extends Component {

  state = {
    posts: blogData,
  }

  addPost(post) {
    this.setState({
      posts: [...blogData, { ...post, id: this.state.posts.length }]
    })
  }

  getPost(id) {
    return this.state.posts[id];
  }

  render() {
    return (
      <Router>
        <div className="App">
  
        <Header></Header>
  
        <Switch>
          <Route path="/blog/add">
            <Add addPost={e => this.addPost(e)}></Add>
          </Route>
          <Route path='/blog/:id'>
            <Post getPost={e => this.getPost(e)}></Post>
          </Route>
          <Route path='/blog'>
            <Blog posts={this.state.posts} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
  
        </div>
      </Router>
    );
  }

}

export default App;
