import React, { Component } from "react";
import axios from "axios";
import Post from "../Postss/Post";
export default class Blog extends Component {
    state={
        posts:[]
    }


componentDidMount(){
// const Url = "https://jsonplaceholder.typicode.com/posts"

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
        this.setState({posts:response.data})
        // console.log(response)
        // <p>{JSON.stringify(response)}</p>
    })
}

  render() {

    const posts=this.state.posts.map(post=>{
        return <Post title={post.title} key={post.id}/>
    })
    return (
      <div>
        <h1>Blog</h1>
        <p download>DownLoad</p>
        <p> This is Blog Page. </p>
        <section>
           Title: {posts}
        </section>
      </div>
    );
  }
}
