import React from "react";
import {View, useWindowDimensions} from "react-native";
import { BarChart } from 'react-native-chart-kit';

const ChildChartExample = (props)=>{

 
  // Configuration for the bar chart
  const chartConfig = {
    decimalPlaces: 0,
    barPercentage: 0.7,
    color: () => `grey`, // Bar color
    
  };
  

  const {width} = useWindowDimensions();

  return (
      <BarChart
        data={{ labels: props.chartLabels, datasets: [props.chartData] }}
        width={width}
        height={250}
        chartConfig={chartConfig}
        showBarTops={false}
        flatColor={true}
         withCustomBarColorFromData={true}
         fromZero={true}
        
      />
     
  );
}


export default ChildChartExample;