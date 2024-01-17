import React, { createContext, useState } from "react";
import {View} from "react-native";
import HooksHeader from "./HooksHeader";
import HooksTabBar from "./HooksTabBar";
import GraphComponent from "./HooksGraphComponent";

export const ItemData = createContext();
const HooksParent=()=>{
    const [item,setItem] = useState({});

    console.log("Parent Component")
    return(
        <>
        <ItemData.Provider value={{item,setItem}}>
        <HooksHeader />
        <GraphComponent />
        <HooksTabBar />
        </ItemData.Provider>
        
        
        </>
       
    )
   
}

export default HooksParent;