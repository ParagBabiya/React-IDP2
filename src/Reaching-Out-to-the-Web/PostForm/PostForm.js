import React, { Component } from "react";
import axios from "axios";
export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }
changehandler=(e)=>{
this.setState({[e.target.value]:e.target.value})
}

submithandler=(e)=>{
  e.preventDefault()
  console.log(this.state)
  axios.post("https://jsonplaceholder.typicode.com/posts" , this.state)
.then(response=>{console.log(response)})
.catch(error=>{console.log(error)})

}
  
  render() {
    const { userid, title, body } = this.props;

    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="userid"
              value={userid}
              onChange={this.changehandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changehandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changehandler}
            />
          </div>
          <button onClick={this.submithandler}>Submit</button>
        </form>
      </div>
    );
  }
}
