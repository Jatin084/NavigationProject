import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import BarChartExample from "./BarChartExample";

const LoginScreen =({navigation})=>{
    return(
        <>
        <BarChartExample />
        <View>
            <Text style={{color:'black', alignSelf:'center',padding:10}}>
                Login Screen
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home',  {
           
            myName: 'Jatin',
          })}}
            style={{backgroundColor:'blue', alignSelf:'center',padding:10}}>
                <Text style={{color:'white'}}>Go To Home Screen</Text>
                
            </TouchableOpacity>
        </View>
        </>

    )
}

export default LoginScreen;