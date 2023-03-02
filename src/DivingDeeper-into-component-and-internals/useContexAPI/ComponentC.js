import React from "react";
import { Firstname,Lastname } from "./ContexAPI";
const ComponentC = () => {
  return (
    <>
      <Firstname.Consumer>
        {(fname) => {
          return (
            <Lastname.Consumer>
                {(lname)=>{
                    return(
                        <h1>This is {fname}{lname}'s Component. </h1>
                    )
                }}
            </Lastname.Consumer>
          )
          
          
         
        }}
      </Firstname.Consumer>
    </>
  );
};

export default ComponentC;
