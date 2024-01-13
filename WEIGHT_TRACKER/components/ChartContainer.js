import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from '../context/ThemeProvider';
// import { weightLossJourneyData as oldData } from '../helpers/Info'

import { InfoGetter } from '../helpers/InfoGetter';
import { useEffect } from 'react';

export const ChartContainer = () => {

    const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();
    const { allWeights, getData, setAllWeights } = InfoGetter();
    
    
    
    return (
        <View>
            <LineChart
                data={{
                    labels: allWeights.map(weight => `${new Date(weight.date).getDay()}/${new Date(weight.date).getMonth() + 1}`),
                    datasets: [{
                        data: allWeights.map(weight => weight.selectedWeight)
                    }],
                }}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="" 
                yAxisSuffix="kg"
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: themeColor,
                    backgroundGradientFrom: themeBackgroundColor,
                    backgroundGradientTo: themeBackgroundColor,
                    
                    decimalPlaces: 1,
                    color: () => themeTextColor,
                    labelColor: () => themeTextColor,
                    style: {
                        borderRadius: 16,
                        
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "1",
                        stroke: themeTextColor
                    }
                }}
                bezier={false}
                withOuterLines={false}
                withHorizontalLines={true}
                withVerticalLines={false}
                style={{
                    marginVertical: 8,                   
                    //   borderRadius: 16
                }}
            />
        </View>
    )
}
