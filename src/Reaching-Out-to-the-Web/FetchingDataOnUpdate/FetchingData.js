import React, { Component } from "react";
import axios from "axios";
export default class FetchingData extends Component {
constructor(props) {
  super(props)

  this.state = {
     loadedPost:null
  }
}


  componentDidUpdate() {
    if (this.props.id) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1" + this.props.id)
        .then((response) => {
        //   console.log(response);
this.setState({loadedPost:response.data})
        });
    }
  }

  render() {

    const {loadedPost}=this.props
    return(
<>

<div>
    {loadedPost}
</div>

</>
    ) 
  }
}
