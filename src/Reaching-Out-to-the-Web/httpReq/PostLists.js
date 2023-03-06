import React, { Component } from "react";
import axios from "axios";

export default class PostLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        const posts = response.data.slice(0,4);


        const updatedPosts = posts.map(post=>{
          return{
            ...post,
            author: 'James'
          }
        })
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errmsg: "error retriving data" });
      });
  }

  render() {
    const { posts, errmsg } = this.state;

    return (
      <>
        <div>
          <h1>List of Posts.</h1>
          {posts.length
            ? posts.map((post) => <div key={post.id}>{post.title}
           </div>)
            : ""}

          {errmsg ? <div>{errmsg}</div> : null}
        </div>
      </>
    );
  }
}
