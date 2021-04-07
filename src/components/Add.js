import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img_url: '',
            author: '',
            published_date: '',
            description: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.addPost(this.state);
        alert('Post added');
        this.setState({
            title: '',
            img_url: '',
            author: '',
            published_date: '',
            description: '',
        });
    }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Titel:
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            </label>
            <label>
              Image Url:
              <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}
