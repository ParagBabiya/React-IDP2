import React from "react";


function MyComponent(props) {
    console.log(props);
    return (
      <div className="App">
        <button onClick={props.handleUnlike}>Unlike</button>:
        <button onClick={props.handleLike}>Like</button>
      </div>
    );
  }
  
  const OptimizedComponent = React.memo(MyComponent);
  
  export default class MyComp extends React.Component {
    state = {
      like: false
    };
  
    handleLike = () => {
      this.setState({
        like: true
      });
    };
  
    handleUnlike = () => {
      this.setState({
        like: false
      });
    };
  
    render() {
      return (
        <div>
          <OptimizedComponent
            like={this.state.like}
            handleLike={this.handleLike}
            handleUnlike={this.handleUnlike}
          />
        </div>
      );
    }
  }