import React,{Component,createContext} from "react";

// const Mycontext = React.createContext;
 const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;
export  class AuthProvider extends Component{
    state={
        username:'',
        isAuthorized:false
    }

    logIn=()=>{
        this.setState({username:'James',isAuthorized:true})
        console.log('click')
    }
    logOut=()=>{
        this.setState({username:'',isAuthorized:false})
        console.log('click')
    }

    render(){
        const {username,isAuthorized}=this.state;
        const {logIn,logOut}=this;

        return(
            <AuthContext.Provider value={{
                username,
                isAuthorized,
                logIn,
                logOut
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContext

// export const Provider =Mycontext.Provider;
// export const Consumer = Mycontext.Consumer;