import React, { Component } from 'react'
import axios from 'axios'
export default class GetReq extends Component {
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            // console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>
            this.setState({errormsg:"error retriving data"}))
    }


  render() {
const {posts,errormsg}=this.state

    return (
      <div>
        {
            posts.length?posts.map((post)=>
            <div key={post.id}>{post.title}</div>):''
        }
        {
            errormsg?<div>{errormsg}</div>:null
        }
        
      </div>
    )
  }
}
