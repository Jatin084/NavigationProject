import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { TextInput, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { ItemData } from "./HooksParent";
import { useDebounceHook } from "./CustomHooks";
import RenderItem from "./FlatListItem";
import SearchComponent from "./SearchComponent";
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
    const [query, setQuery] = useState("")
    const { setItem } = useContext(ItemData)
    const [listData, setListData] = useState([]);
    // const [searchedValue, setSearchedValue] = useState("");
    const [timeStamp, setTimeStamp] = useState()
    const arrayholder = marketDataList;
   
    useEffect(() => {
        setListData(marketDataList)
    }, [])



    // useDebounceHook(700,()=>{
    //     const updatedData = arrayholder.filter((item) => {
    //         const item_data = item.name;
    //         if (item_data.includes(searchedValue))
    //             return item;

    //     });
    //     setSearched(updatedData);
    // },[searchedValue])

    // const searchFunction = (text) => {
    //     if (!text) {
    //         console.log("Push All:", text)
    //         setListData(arrayholder)
    //     } else {
    //         const updatedList = arrayholder.filter((item) => {
    //             if (item.name.toLowerCase().includes(text.toLowerCase()))
    //                 return item;
    //             });

    //         setListData(updatedList)
    //     }
    //     console.log("QUERY:", text)
    //     console.log("UpdatedList:", listData)


    // };

    useEffect(()=>{
        if (!query) {
            setListData(arrayholder)
        } else {
            const updatedList = arrayholder.filter((item) => {
                if (item.name.toLowerCase().includes(query.toLowerCase()))
                    return item;
                });

            setListData(updatedList)
        }
    },[query])


    const handleItemPress = useCallback((index)=>{
        const time = Date.now()
        listData[index] = { ...listData[index], marketCap: time }
        setItem(listData[index])
        setTimeStamp(time)

    },[listData])



    return (<View style={{ backgroundColor: 'white' }}>
        <SearchComponent searching={(query) => setQuery(query)} />
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
            data={listData}
            ItemSeparatorComponent={() => {
                return (<View
                    style={styles.viewItemSeperator}
                />)
            }}
            extraData={timeStamp}
            renderItem={({ item, index }) => <RenderItem item={item} handleItemPress={handleItemPress} index={index} />}
        />
    </View>
    );
}
const Recent = () => {
    const [query, setQuery] = useState("")
    const { setItem } = useContext(ItemData)
    const [listData, setListData] = useState([]);
    // const [searchedValue, setSearchedValue] = useState("");
    const [timeStamp, setTimeStamp] = useState()
    const arrayholder = marketDataList;
   
    useEffect(() => {
        setListData(marketDataList)
    }, [])



    // useDebounceHook(700,()=>{
    //     const updatedData = arrayholder.filter((item) => {
    //         const item_data = item.name;
    //         if (item_data.includes(searchedValue))
    //             return item;

    //     });
    //     setSearched(updatedData);
    // },[searchedValue])

    // const searchFunction = (text) => {
    //     if (!text) {
    //         console.log("Push All:", text)
    //         setListData(arrayholder)
    //     } else {
    //         const updatedList = arrayholder.filter((item) => {
    //             if (item.name.toLowerCase().includes(text.toLowerCase()))
    //                 return item;
    //             });

    //         setListData(updatedList)
    //     }
    //     console.log("QUERY:", text)
    //     console.log("UpdatedList:", listData)


    // };

    useEffect(()=>{
        if (!query) {
            setListData(arrayholder)
        } else {
            const updatedList = arrayholder.filter((item) => {
                if (item.name.toLowerCase().includes(query.toLowerCase()))
                    return item;
                });

            setListData(updatedList)
        }
    },[query])


    const handleItemPress = useCallback((index)=>{
        const time = Date.now()
        listData[index] = { ...listData[index], marketCap: time }
        setItem(listData[index])
        setTimeStamp(time)

    },[listData])



    return (<View style={{ backgroundColor: 'white' }}>
        <SearchComponent searching={(query) => setQuery(query)} />
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
            data={listData}
            ItemSeparatorComponent={() => {
                return (<View
                    style={styles.viewItemSeperator}
                />)
            }}
            extraData={timeStamp}
            renderItem={({ item, index }) => <RenderItem item={item} handleItemPress={handleItemPress} index={index} />}
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

export default memo(HooksTabBar);

