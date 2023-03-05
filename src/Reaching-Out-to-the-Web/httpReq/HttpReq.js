import React, { Component } from 'react'
import GetReq from './getReq'
import PostLists from './PostLists'

 class HttpReq extends Component {
  render() {
    return (
      <div>
        <PostLists/>
        {/* <GetReq/> */}
      </div>
    )
  }
}

export default HttpReq
