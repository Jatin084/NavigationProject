import React,{memo} from "react";
import { View,TouchableOpacity,Text,StyleSheet,Image } from "react-native";


const RenderItem = memo(function RenderItem({item, handleItemPress, index}) {
return(
    <>
    <TouchableOpacity onPress={() => handleItemPress(index)} >

        <View style={styles.listItem}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.imageStyle}
                    resizeMode="cover"
                    source={require('../HooksAssignment/assets/kcal.png')}
                />
                <Text style={[styles.textStyle, { marginLeft: 5 }]}>{item.name}</Text>
            </View>
            <Text style={styles.textStyle}>$ {item.price}</Text>
            <Text style={styles.textStyle}>{item.change}</Text>
            <Text style={styles.textStyle}>{item.marketCap}</Text>

        </View>
    </TouchableOpacity>
</>

)})
// export default React.memo(RenderItem, (prevProps, nextProps)=>{return prevProps.item.marketCap == nextProps.item.marketCap });
export default RenderItem;
const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        marginHorizontal: 20
    },
    textStyle: {
        color: 'black',
        fontSize: 10,
        fontWeight: '500'
    },
    imageStyle: {
        width: 20, height: 20
    },
    viewItemSeperator: {
        height: 1,
        width: "90%",
        backgroundColor: 'lightgrey',
        alignSelf: 'center'
    }
});
