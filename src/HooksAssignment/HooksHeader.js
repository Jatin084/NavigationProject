import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const HooksHeader = () => {
    console.log("Header Component")

    return (
       <View>

        <View style={{ flexDirection: 'row', padding:10, justifyContent:'space-between' }}>
            <View style={styles.roundshape}>
                <Image style={styles.imageStyle}
                    resizeMode="cover"
                    source={require('../HooksAssignment/assets/hemburger_menu.png')}
                />
            </View>
            <View style={{ flexDirection: 'row'}}>

            <View style={[styles.roundshape, { backgroundColor: '#98d1eb'}]}>
                <Text style={{color:'blue', fontSize:20 }}>+</Text>

            </View>
            <View style={[styles.roundshape, { backgroundColor: 'white', borderColor: 'lightgrey', borderWidth: 1, marginLeft:10}]}>
                <Image style={styles.imageStyle}
                    resizeMode="cover"
                    source={require('../HooksAssignment/assets/kcal.png')}
                />
                
            </View>
            <View style={[styles.roundshape, {backgroundColor: 'white', borderColor: 'lightgrey', borderWidth: 1,marginLeft:10 }]}>
                <Image style={styles.imageStyle}
                    resizeMode="cover"
                    source={{uri:'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg'}}
                />
                
            </View>

            </View>

        </View>
        <View style={styles.viewItemContainer} />
        </View>

    )
}

const styles = StyleSheet.create({
    roundshape: {
        backgroundColor: 'blue',
        height: 30, //any of height
        width: 30, //any of width
        borderRadius: 22,  // it will be height/2
        justifyContent: 'center', alignItems: "center",

    },
    imageStyle: {
        width: 20, height: 20
    },
    viewItemContainer: {
        height: 1,
        width: "100%",
        backgroundColor: 'lightgrey',
    }
});
export default memo(HooksHeader);
