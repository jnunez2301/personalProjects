import { View, Text, StyleSheet, Pressable, Modal, TextInput, Button } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { useMemo, useState } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { weightLossJourneyData } from '../helpers/Info';
import AsyncStorage from '@react-native-async-storage/async-storage';

const generateWeights = () => {
    const weights = [];
    for (let i = 40; i <= 250; i++) {
        weights.push({ label: i, value: i });
    }
    return weights;
};

export const AddButton = () => {
    const weights = useMemo(generateWeights, []);
    
    const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [form, setForm] = useState({});
    const [date, setDate] = useState(new Date());
    const [selectedWeight, setSelectedWeight] = useState(weightLossJourneyData[weightLossJourneyData.length - 1].weight);

    const initialSelectedIndex = generateWeights().findIndex(weight => weight.label === selectedWeight);


    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange: onDateChange,
            mode: currentMode,
            is24Hour: true,
            maximumDate: Date.now()
            });
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const handleWeightSubmit= async() => {
        setForm({
            weight: selectedWeight,
            date: date
        })
        setModalVisible(!modalVisible)
        
        try{
            const jsonValue = JSON.stringify(form);
            await AsyncStorage.setItem('weightLossJourneyData', jsonValue)
        }catch(e){
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: themeColor }]}>
                        <Pressable onPress={showDatepicker}
                            style={[styles.dateSelector, { backgroundColor: themeColor }]}>
                            <Text style={{ color: themeTextColor }}>{`${new Date(date).getDay()}/${new Date(date).getMonth()}`}</Text>
                        </Pressable>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <WheelPickerExpo
                                height={200}
                                width={40}
                                backgroundColor={themeColor}
                                initialSelectedIndex={initialSelectedIndex}
                                items={weights}
                                onChange={({ item }) => setSelectedWeight(item.label)}
                            />
                            <Text style={[{ color: themeTextColor }]}>KG</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 45 }}>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={[styles.textStyle, {color: themeTextColor}]}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    handleWeightSubmit()
                                }
                                }>
                            <Text style={[styles.textStyle, {color: themeTextColor}]}>Add</Text>
                        </Pressable>
                    </View>

                </View>
        </View>
            </Modal >
    <Pressable
        onPress={() => setModalVisible(true)}
        style={[
            styles.btnCircle,
            {backgroundColor: themeTextColor}
        ]}>
        <Text
            style={{
                color: themeColor,
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center'
            }}>+</Text>
    </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    btnCircle: {
        borderRadius: 100,
        height: 50,
        width: 50,
        // backgroundColor: 'plum',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 300,
        width: 300,
        position: 'relative'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputStyle: {
        height: 50,
        width: 100,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 5,
        marginBottom: 16,
        textAlign: 'center'
    },
    dateSelector: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 10,
        borderRadius: 10,
        margin: 28
    }
})