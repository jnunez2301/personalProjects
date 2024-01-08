import { View, Text, StyleSheet, Pressable, Modal, TextInput } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { useState } from 'react';
import DatePicker from 'react-native-date-picker'


export const AddButton = () => {
    const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [form, setForm] = useState({});
    const [date, setDate] = useState(new Date())

    const onTextChange = (newText) => {
        setText(newText)
    }
    const onDateChange = (newDate) => {
        setSelectedDate(newDate)
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
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Todays Weight"
                            keyboardType='numeric'
                            maxLength={2}
                            onChangeText={newText => onTextChange(newText)}
                            defaultValue={text}
                            keyboardAppearance='default'

                        />
                        <DatePicker
                            modal
                            open={modalVisible}
                            date={date}
                            /* onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }} */
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
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
        width: 300
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
    }
})