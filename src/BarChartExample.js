import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import ChildChartExample from "./ChildChartExample";

const BarChartExample = () => {
  const categoryData = [
    { id: '1', title: 'D', selected: false },
    { id: '2', title: 'W', selected: false },
    { id: '3', title: 'M', selected: false },
    { id: '4', title: '6M', selected: false },
    { id: '5', title: 'Y', selected: false },
  ];
  const [data, setData] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  const [chartData, setChartData] = useState({});
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    setData(categoryData);
    setCategoryId('1');
    setChartData({ ...chartData, ...daysData });
    setChartLabels(
      dayLabels
    );
  }, []);

  const selectCategory = (categoryId) => {
    setCategoryId(categoryId)

    switch (categoryId) {
      case '1':
        setChartData(daysData)
        setChartLabels(dayLabels)
        console.log("Days.....Data", chartData)

        break;
      case '2':
        setChartData(weekData)
        setChartLabels(weekLabels)
        console.log("Week.....Data", chartData)

        break;
      case '3':
        setChartData(monthData)
        setChartLabels(monthLabels)
        console.log("Month.....Data", chartData)

        break;
      case '4':
        setChartData(sixMonthsData)
        setChartLabels(sixMonthsLabels)
        console.log("SixMonth.....Data", chartData)

        break;
      case '5':
        setChartData(yearData)
        setChartLabels(yearLabels)
        console.log("Year.....Data", chartData)

        break;
      default:
      // code block


    }
  }

  const setSelectedIndex = (id) => {
    let selectedIndex = 0
    categoryData.map((item, index) => {
      if (index == id) {
        categoryData[index].selected = true;
        selectedIndex = index

      } else {
        categoryData[index].selected = false;
      }
    });



    setData([...categoryData]);


    console.log(data)

  };
  // const renderItem = ({ item, index }) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => setSelectedIndex(index)}
  //       style={{
  //         backgroundColor: item.selected ? '#969693' : '#2b2b2a',
  //         paddingHorizontal: item.selected ? 10 : 0,
  //       }}
  //     >
  //       <Text style={styles.textStyle}>{item.title}</Text>
  //     </TouchableOpacity>
  //   );
  // };
  const daysData = {
    data: [500, 700, 900, 1200, 1000, 1500, 1800],
    colors: [(opacity = 1) => '#e37705',
    (opacity = 1) => '#e37705', (opacity = 1) => '#e37705',
    (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705']
  };

  const weekData = {
    data: [5500, 6000, 6300, 6500],
    colors: [
      (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705']
  }; // Weekly step counts
  const monthData = {
    data: [25000, 27000, 30000, 32000],
    colors: [
      (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705']

  }; // Monthly step counts
  const sixMonthsData = {
    data: [140000, 150000, 155000, 160000, 165000, 160540],
    colors: [
      (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705']
  }; // Six-month step counts
  const yearData = {
    data: [300000, 320000, 350000, 370000, 305000, 320500, 354000, 380000], colors: [
      (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705',
      (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705', (opacity = 1) => '#e37705']
  }; // Yearly step counts



  // Labels for the x-axis
  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Days
  const weekLabels = ['Week1', 'Week2', 'Week3', 'Week4']; // Weeks
  const monthLabels = ['1st', '2nd', '3rd', '4th']; // Months
  const sixMonthsLabels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun']; // Six months
  const yearLabels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug']; // Years


  return (

    <View style={styles.container}>
        {/* <FlatList style={styles.categoryStyle}
          data={data}
          horizontal={true}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={styles.viewItemContainer}
              />
            );
          }}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={[styles.touchableStyle, categoryId === '1' ? styles.touchableSelectedStyle : styles.touchableStyle]}
            onPress={() => { selectCategory('1') }}>
            <Text style={styles.textStyle} >D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchableStyle, categoryId === '2' ? styles.touchableSelectedStyle : styles.touchableStyle]}
            onPress={() => { selectCategory('2') }}>
            <Text style={styles.textStyle}>W</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchableStyle, categoryId === '3' ? styles.touchableSelectedStyle : styles.touchableStyle]}
            onPress={() => { selectCategory('3') }}>
            <Text style={styles.textStyle}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchableStyle, categoryId === '4' ? styles.touchableSelectedStyle : styles.touchableStyle]}
            onPress={() => { selectCategory('4') }}>
            <Text style={styles.textStyle}>6M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchableStyle, categoryId === '5' ? styles.touchableSelectedStyle : styles.touchableStyle]}
            onPress={() => { selectCategory('5') }}>
            <Text style={styles.textStyle}>Y</Text>
          </TouchableOpacity>


      </View>
      <ChildChartExample chartLabels={chartLabels} chartData={daysData} />
    </View>

  );
}



export default BarChartExample;
const styles = StyleSheet.create({
  categoryStyle: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#2b2b2a',
    marginHorizontal: 20,
    marginBottom: 15

  }, buttonStyle: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#2b2b2a',
    marginHorizontal: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: "space-around"

  },
  container: {
    backgroundColor: 'black',
  },
  textStyle: {
    fontSize: 12,
    paddingHorizontal: 22,
    color: 'white'
  },
  touchableStyle: {
    borderRadius: 5,
    backgroundColor: '#2b2b2a',
    padding: 5
  },
  touchableSelectedStyle: {
    borderRadius: 5,
    backgroundColor: 'grey',
    padding: 5
  },
  viewItemContainer: {
    height: "90%",
    width: 1,
    backgroundColor: 'lightgrey',
    marginHorizontal: 20
  }

});


