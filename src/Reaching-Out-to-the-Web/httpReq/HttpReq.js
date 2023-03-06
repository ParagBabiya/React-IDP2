import React, { Component } from 'react'
import FetchingData from '../FetchingDataOnUpdate/FetchingData'
import PostForm from '../PostForm/PostForm'
import GetReq from './getReq'
import PostLists from './PostLists'

 class HttpReq extends Component {
  render() {
    return (
      <div className='post' >
        {/* <PostLists/> */}
        {/* <GetReq/> */}
        {/* <PostForm/> */}
        <FetchingData/>
      </div>
    )
  }
}

export default HttpReq
