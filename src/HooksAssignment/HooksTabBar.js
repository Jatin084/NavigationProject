import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, {  useContext, useEffect, useState } from "react";
import { TextInput, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { ItemData } from "./HooksParent";
import { useDebounceHook } from "./CustomHooks";
const marketDataList = [{
    name: "BTC",
    id: "1",
    marketCap: "340",
    price: 100,
    change: "-8%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"
}, {
    name: "LTC",
    id: "2",
    marketCap: "340",
    price: 200,
    change: "-10%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "ETH",
    id: "3",
    marketCap: "340",
    price: 300,
    change: "-8%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "USDC",
    id: "4",
    marketCap: "340",
    price: 400,
    change: "+18%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "BTC",
    id: "5",
    marketCap: "340",
    price: 500,
    change: "+10",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "ETS",
    id: "6",
    marketCap: "340",
    price: 600,
    change: "-20%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "FTM",
    id: "7",
    marketCap: "340",
    price: 700,
    change: "+25%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "TTH",
    id: "8",
    marketCap: "340",
    price: 800,
    change: "-5%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "TTH",
    id: "9",
    marketCap: "340",
    price: 800,
    change: "-5%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "TTH",
    id: "10",
    marketCap: "340",
    price: 800,
    change: "-5%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}]
const recentDataList = [{
    name: "BTC",
    id: "1",
    marketCap: "340",
    price: 100,
    change: "-8%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"
}, {
    name: "LTC",
    id: "2",
    marketCap: "340",
    price: 200,
    change: "-10%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "ETH",
    id: "3",
    marketCap: "340",
    price: 300,
    change: "-8%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "USDC",
    id: "4",
    marketCap: "340",
    price: 400,
    change: "+18%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "BTC",
    id: "5",
    marketCap: "340",
    price: 500,
    change: "+10",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "ETS",
    id: "6",
    marketCap: "340",
    price: 600,
    change: "-20%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "FTM",
    id: "7",
    marketCap: "340",
    price: 700,
    change: "+25%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "TTH",
    id: "8",
    marketCap: "340",
    price: 800,
    change: "-5%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "TTH",
    id: "9",
    marketCap: "340",
    price: 800,
    change: "-5%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}, {
    name: "TTH",
    id: "10",
    marketCap: "340",
    price: 800,
    change: "-5%",
    image: "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"

}]
const Tab = createMaterialTopTabNavigator();

const HooksTabBar = () => {
    console.log("TabBar Component")


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationContainer>

                <Tab.Navigator>
                    <Tab.Screen name='Market' component={Market} />
                    <Tab.Screen name='Recent' component={Recent} />

                </Tab.Navigator>
            </NavigationContainer>

        </View>


    )

}




const Market = () => {
    const { setItem } = useContext(ItemData)
    const [searchedData, setSearched] = useState([]);
    const [searchedValue, setSearchedValue] = useState("");
    const arrayholder = marketDataList;
    useEffect(() => {
        setSearched(marketDataList)

    }, [])

    

    useDebounceHook(700,()=>{
        const updatedData = arrayholder.filter((item) => {
            const item_data = item.name;
            console.log("item_data", item_data)
            if (item_data.includes(searchedValue))
              for(let i =1;i<50000;i++){}

                return item;

        });
        setSearched(updatedData);
    },[searchedValue])

    const searchFunction = (text) => {
        setSearchedValue(text);

    };


    const handleItemPress = (item) => {
        item.marketCap = Math.floor(Date.now() / 1000)
        setItem(item)
    };



    return (<View style={{ backgroundColor: 'white' }}>
        <View style={styles.imputType}>
            <TextInput style={{ marginStart: 5 }}
                placeholder="Search your choice"
                // value={searchedValue}
                onChangeText={(text) => searchFunction(text)}
            />
        </View>
        <View style={styles.listItem}>
            <Text style={[styles.textStyle, { marginLeft: 5 }]}>Market</Text>
            <Text style={styles.textStyle}>Price</Text>
            <Text style={styles.textStyle}>Change</Text>
            <Text style={styles.textStyle}>Market cap</Text>

        </View>
        <View
            style={styles.viewItemSeperator}
        />
        <FlatList
            data={searchedData}
            ItemSeparatorComponent={() => {
                return (<View
                    style={styles.viewItemSeperator}
                />)
            }}
            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                return (
                    <>
                        <TouchableOpacity onPress={() => handleItemPress(item)} >

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

                )

            }}
        />
    </View>
    );
}
const Recent = () => {
    const { setItem } = useContext(ItemData)
    const [searchedData, setSearched] = useState([]);
    const [searchedValue, setSearchedValue] = useState("");
    const arrayholder = marketDataList;
    useEffect(() => {
        setSearched(recentDataList)

    }, [])
    useDebounceHook(700,()=>{
        const updatedData = arrayholder.filter((item) => {
            const item_data = item.name;
            console.log("item_data", item_data)
            if (item_data.includes(searchedValue))
                return item;

        });
        setSearched(updatedData);
    },[searchedValue])

    const searchFunction = (text) => {
        setSearchedValue(text);

    };
    


    const handleItemPress = (item) => {
        item.marketCap = Math.floor(Date.now() / 1000)
        setItem(item)
    };
    return (<View style={{ backgroundColor: 'white' }}>
         <View style={styles.imputType}>
            <TextInput style={{ marginStart: 5 }}
                placeholder="Search your choice"
                value={searchedValue}
                onChangeText={(text) => searchFunction(text)}
            />
        </View>
        <View style={styles.listItem}>
            <Text style={[styles.textStyle, { marginLeft: 5 }]}>Recent</Text>
            <Text style={styles.textStyle}>Price</Text>
            <Text style={styles.textStyle}>Change</Text>
            <Text style={styles.textStyle}>Market cap</Text>

        </View>
        <View
            style={styles.viewItemSeperator}
        />
        <FlatList
            data={searchedData}
            ItemSeparatorComponent={() => {
                return (<View
                    style={styles.viewItemSeperator}
                />)
            }}
            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                console.log("Market Itmes");
                return (
                    <>
                        <TouchableOpacity onPress={() => handleItemPress(item)}>
                      
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
                )

            }}
        />
    </View>
    );
}
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
    }, imputType: {
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        padding: 2,
        borderRadius: 10,
        borderColor: '#F5F5F5',
        borderWidth: 2,
        color: 'grey',
        marginHorizontal: 10

    }
});

export default HooksTabBar;

