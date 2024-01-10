import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from '../context/ThemeProvider';
import { weightLossJourneyData } from '../helpers/Info'
import { useEffect } from 'react';

export const ChartContainer = () => {

    const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();

    if(!weightLossJourneyData) return [];

    return (
        <View>
            <LineChart
                data={{
                    labels: weightLossJourneyData.map(weight => `${weight.date.getDay()}/${weight.date.getMonth()}`),
                    datasets: [{
                        data: weightLossJourneyData.map(weight => weight.weight)
                    }]
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
                        r: "6",
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
