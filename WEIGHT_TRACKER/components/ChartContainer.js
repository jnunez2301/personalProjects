import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from '../context/ThemeProvider';
import { useEffect } from 'react';

export const ChartContainer = ({ newInfo }) => {
    
    const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();

    // Sort the newInfo array by date
    newInfo.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <View>
            <LineChart
                data={{
                    labels: newInfo.slice(-7).map(weight => `${new Date(weight.date).getDate()}/${new Date(weight.date).getMonth() + 1}`),
                    datasets: [{
                        data: newInfo.slice(-7).map(weight => weight.selectedWeight)
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
    );
};
