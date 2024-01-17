import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import LineChartExample from "./LineChartExample";

const HomeScreen =({ route, navigation})=>{
    const {myName}= route.params;
    console.log("Jatin",myName)

    return(
        <View>
        <LineChartExample />
        
        <View>
            <Text style={{color:'black', alignSelf:'center',padding:10}}>
                Home Screen, Welcome {myName}
            </Text>
            <TouchableOpacity onPress={()=>{ 
                console.log("kwjbkwdbwdbbwodjbo")
                navigation.goBack()}}
            style={{backgroundColor:'blue',alignSelf:'center', padding:10}}>
                <Text style={{color:'white'}}>Go To Back</Text>
                
            </TouchableOpacity>
            
        </View>
        </View>

    )
}

export default HomeScreen;