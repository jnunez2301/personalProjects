import { View, Text, StyleSheet, Pressable, Modal, TextInput, Button } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { memo, useMemo, useState } from 'react';
import { DateTimePicker, DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { weightLossJourneyData } from '../helpers/Info';


const generateWeights = () => {
    const weights = [];
    for (let i = 40; i <= 250; i++) {
      weights.push({ label: i, value: i });
    }
    return weights;
  };

export const AddButton = () => {
    const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [form, setForm] = useState({});
    const [date, setDate] = useState(new Date(1598051730000));
    const [city, setCity] = useState('');
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
        });
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const onTextChange = (newText) => {
        setText(newText)
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
                    <View style={[styles.modalView, {backgroundColor: themeColor}]}>
                        <Pressable onPress={showDatepicker}
                        style={[styles.dateSelector, {backgroundColor: themeBackgroundColor}]}>
                            <Text style={{ color: themeTextColor }}>{`${date.getDay()}/${date.getMonth()}`}</Text>
                        </Pressable>
                        <WheelPickerExpo
                            height={200}
                            width={200}
                            backgroundColor={themeColor}
                            initialSelectedIndex={initialSelectedIndex}
                            items={generateWeights()}
                            onChange={({ item }) => setSelectedWeight(item.label)}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Add</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}
                style={[
                    styles.btnCircle
                ]}>
                <Text
                    style={{
                        color: '#f2f2f2',
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>+</Text>
            </Pressable>
        </View>
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
        backgroundColor: 'plum',
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
        color: 'white',
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
        bottom: 16,
        left: 30,
        padding: 10,
        borderRadius: 10
    }
})