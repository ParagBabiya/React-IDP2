import React from "react"
import WindowTracker from "./WindowTracker"

export default class ComponentWillUnmount extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }
    
    watchWidth = () => {
        this.setState({windowWidth: window.innerWidth})
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.watchWidth)
    }
    
    render() {
        return (
            <>
           
            <h1>Window width: {this.state.windowWidth}</h1>
            </>
        )
    }
}
