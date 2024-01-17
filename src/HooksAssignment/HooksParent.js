import React, { createContext, useState } from "react";
import {View} from "react-native";
import HooksHeader from "./HooksHeader";
import HooksTabBar from "./HooksTabBar";
import GraphComponent from "./HooksGraphComponent";

export const ItemData = createContext();
const HooksParent=()=>{
    const [item,setItem] = useState({});

    // const onListClicked = (item)=>{
    //     setItem(item)
    //     console.log("parent called")

    // }
    const handleListClicked = () => {
        // setItem(item)
                console.log("parent function called")

};
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