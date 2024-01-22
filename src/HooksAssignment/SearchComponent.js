import React, {memo, useEffect, useState} from "react";
import { View,TextInput, StyleSheet } from "react-native";

 const SearchComponent = ({searching})=>{
    const [query, setQuery] = useState("")

    useEffect(()=> {
        searching(query)
    }, [query])

    return( <View style={styles.imputType}>
        <TextInput style={{ marginStart: 5 }}
            placeholder="Search your choice"
            value={query}
            onChangeText={(text) => setQuery(text)}
        />
    </View>)
}
const styles = StyleSheet.create({
    imputType: {
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
export default memo(SearchComponent);