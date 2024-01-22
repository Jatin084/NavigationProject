import React, { createContext, useState, memo } from "react";
import {View} from "react-native";
import HooksHeader from "./HooksHeader";
import HooksTabBar from "./HooksTabBar";
import GraphComponent from "./HooksGraphComponent";

export const ItemData = createContext();
const HooksParent=()=>{
    const [item,setItem] = useState({});

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

export default memo(HooksParent);