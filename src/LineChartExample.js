import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, useWindowDimensions, TouchableWithoutFeedback } from "react-native";
import { LineChart } from "react-native-chart-kit";

const LineChartExample = () => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 });
  const handleTooltip = (x, y, value) => {
    console.log(x, y)
    setTooltipPos({ x, y, visible: true, value });
  };

  const hideTooltip = () => {
    setTooltipPos({ ...tooltipPos, visible: false });
  };
  const dayData = {
    datasets: [{
      data: [0, 100, 110, 10, 20, 0, 125, 140, 150, 145, 201, 105,
        90, 100, 110, 80, 70, 130, 125, 140, 150, 145, 152, 105],
    }
    ], // optional
    labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM',
      '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],

  };
  const zeroIndices = [];
  const arr =dayData.datasets[0].data
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroIndices.push(i);
      }
    }
    console.log("Jatin",zeroIndices);
  const maxElement = Math.max(...dayData.datasets[0].data)

  maxYAxisLabel = (Math.ceil(maxElement / 100) * 100) / 4
  console.log(maxYAxisLabel);
  yaxixLabels = [];
  for (let i = 4; i >= 0; i--) {
    yaxixLabels.push(i * maxYAxisLabel)
  }
  console.log(yaxixLabels)

  const xlabels = [{ id: 1, label: '12AM', isLunch: false }, { id: 2, label: '1AM', isLunch: true }, { id: 3, label: '2AM', isLunch: true }, { id: 4, label: '3AM', isLunch: false }, { id: 5, label: '4AM', isLunch: false }, { id: 6, label: '5AM', isLunch: true }, { id: 7, label: '6AM', isLunch: false }, { id: 8, label: '7AM', isLunch: true }, { id: 9, label: '8AM', isLunch: false }, { id: 10, label: '9AM', isLunch: false }, { id: 11, label: '10AM', isLunch: false }, { id: 12, label: '11AM', isLunch: false }, { id: 13, label: '12PM', isLunch: false },
  { id: 14, label: '1PM', isLunch: false }, { id: 15, label: '2PM', isLunch: true }, { id: 16, label: '3PM', isLunch: false }, { id: 17, label: '4PM', isLunch: false }, { id: 18, label: '5PM', isLunch: false }, { id: 19, label: '6PM', isLunch: false }, { id: 20, label: '7PM', isLunch: false }, { id: 21, label: '8PM', isLunch: false }, { id: 22, label: '9PM', isLunch: false }, { id: 23, label: '10PM', isLunch: false }, { id: 24, label: '11PM', isLunch: false }];


  
  const chartConfig = {
    decimalPlaces: 1,
    stackedBar:true,
    verticalLabelsHeightPercentage: 100,

    paddingLeft: 0,
    backgroundColor: 'white',
    backgroundGradientFrom: "grey",
    backgroundGradientTo: "#fff",
   
    color: (opacity = 1) => `green`,
    labelColor: (opacity = 1) => `black`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "green"
    },
   

  }
  // Labels for the x-axis

  return (


    <View style={styles.container}>
      <View style={{justifyContent: 'space-between' , marginLeft:10,height:250}}>

        {
          yaxixLabels.map(item => (
            <View>

              <Text style={{ color: 'black', fontSize: 11 }}>{item}</Text>

            </View>


          ))}
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false} // to hide scroll bar
      >
        <View style={{ flexDirection: 'column' }}>

          <LineChart

            onDataPointClick={({ x, y, value }) => handleTooltip(x, y, value)}
            // style={{ marginVertical: 8}}
            data={dayData}

            width={1500}
            height={250}
            chartConfig={chartConfig}
            fromZero={true}
            withInnerLines={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            withShadow={false}
        style={{
          paddingRight:10,
          paddingTop: 0,

        }}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            hidePointsAtIndex={zeroIndices}
           

            

            // withHorizontalLabels={false}

            




          />


          <View style={{ marginTop:10,marginRight:10, flexDirection: 'row', justifyContent: 'space-between' }}>

            {

              xlabels.map(item => (
                <View key={item.id}>

                  <Text style={{ color: 'black', fontSize: 11 }}>{item.label}</Text>
                  {
                    item.isLunch ?
                      <Image source={require('../assets/kcal.png')} style={{ marginTop: 3, height: 20, width: 20 }} />
                      : null
                  }


                </View>


              ))}
          </View>
          {tooltipPos.visible && (
            <View style={{
              position: 'absolute', left: tooltipPos.x, top: tooltipPos.y - 50, borderColor: 'lightgrey', borderRadius: 5, borderWidth: 1, backgroundColor: '#fff', padding: 10, shadowOffset: { width: -2, height: 4 },
              shadowColor: '#171717',
              shadowOpacity: 0.2,
              shadowRadius: 3
            }}>
              <Text style={{ color: 'black', alignSelf: 'center' }}>{`${tooltipPos.value} mg/dL`}</Text>
              <Text style={{ color: 'grey', alignSelf: 'center' }}>Fasting 10:30 AM</Text>
            </View>
          )}
        </View>

      </ScrollView>

    </View>


  );
}



export default LineChartExample;
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flexDirection:'row'
  },

});


