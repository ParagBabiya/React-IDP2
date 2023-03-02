// import { createContext } from "react";
import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const Firstname = createContext();
const Lastname = createContext();
const ContextAPI = () => {
  return (
    <>
      <Firstname.Provider value={"James"}>
        <Lastname.Provider value={"Bond"}>
          <ComponentA />
        </Lastname.Provider>
      </Firstname.Provider>
    </>
  );
};

export default ContextAPI;
export { Firstname,Lastname };
