import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ItemData } from "./HooksParent";

const GraphComponent = () => {
    console.log("Graph Component")
    const { item } = useContext(ItemData)
    const barsList = [{ id: 1, color: 'orange', height: 100 }, { id: 2, color: 'lightblue', height: 120 }, { id: 3, color: 'green', height: 60 }, { id: 4, color: 'orange', height: 90 },
    { id: 5, color: 'orange', height: 70 }, { id: 6, color: 'lightblue', height: 80 }, { id: 7, color: 'green', height: 100 }, { id: 8, color: 'orange', height: 75 },
    { id: 9, color: 'orange', height: 90 }, { id: 10, color: 'lightblue', height: 70 }, { id: 11, color: 'green', height: 95 }, { id: 12, color: 'orange', height: 80 }];

    return (

        <View style={styles.viewContainer}>
            <View style={styles.graphContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>Current Balance (USD)</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>USD</Text>

                </View>
                <Text style={{ fontSize: 30, fontWeight: "bold", color: 'black' }}>${item.marketCap}</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>Last update yesterday</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Text style={{ fontSize: 8, color: 'green' }}>53% Growth</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: 'black' }}>BTC</Text>
                        <Text style={{ fontSize: 10, color: 'black', marginLeft: 35 }}>USDC</Text>
                        <Text style={{ fontSize: 10, color: 'black', marginLeft: 35 }}>LTC</Text>

                    </View>
                </View>
                <View style={{ marginTop: 30, flex: 1, flexDirection: "row", alignItems: 'baseline', justifyContent: 'center' }}>

                    {

                        barsList.map(item => (
                            <View style={{
                                marginHorizontal: 6,
                                height: item.height,
                                width: 15,
                                backgroundColor: item.color,
                                borderTopLeftRadius: 7,
                                borderTopRightRadius: 7
                            }} />
                        ))}
                </View>
                <View style={{ marginTop: 10, flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between',marginHorizontal:30 }}>
                <Text style={{ fontSize: 10, color: 'black' }}>All</Text>
                <Text style={{ fontSize: 10, color: 'black' }}>4h</Text>
                <Text style={{ fontSize: 10, color: 'black' }}>16h</Text>
                <Text style={{ fontSize: 10, color: 'black' }}>1d</Text>
                <Text style={{ fontSize: 10, color: 'black' }}>2d</Text>
                <Text style={{ fontSize: 10, color: 'black' }}>4d</Text>

                    
                </View>
            </View>

        </View>


    )

}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, backgroundColor: 'lightgrey',
        marginHorizontal: 3
    },
    graphContainer:
    {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1
    },
});

export default GraphComponent;



