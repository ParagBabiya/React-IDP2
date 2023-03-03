import React, { Component } from 'react'
// import ChildComp from './ChildComp'
// import AuthContext,{AuthProvider} from './ContextType'
import {AuthConsumer, AuthProvider} from './ContextType';
import AuthContext from './ContextType'

class MainComp extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:'aqua'}}>Main Comp</h1>
        <AuthProvider>
            <ChildComp/>
            <ChildComp2/>
        </AuthProvider>
      </div>
    )
  }
}

class ChildComp extends Component {
    render() {
    // console.log(this.context)
    const {username,isAuthorized,logIn,logOut}=this.context
    return (
      <div>
        <h1>ChildComponent</h1>
        <h1>User:{username}</h1>
        <h1>Authorized:{isAuthorized?"Authorized":"Unauthorized"}</h1>
        <button onClick={logIn}>LogIn</button>
        <button onClick={logOut}>LogOut</button>
      </div>
    )
  }
}


class ChildComp2 extends Component{
  render(){
    return(
      <AuthConsumer>
        {props=>{
              const {username,isAuthorized,logIn,logOut}=props

  return (
    <div>
      <h1>ChildComponent2</h1>
      <h1>User:{username}</h1>
      <h1>Authorized:{isAuthorized?"Authorized":"Unauthorized"}</h1>
      <button onClick={logIn}>LogIn</button>
      <button onClick={logOut}>LogOut</button>
    </div>
  )
  
}}
      </AuthConsumer>
    )
    
  }
}
ChildComp.contextType= AuthContext

export default MainComp
