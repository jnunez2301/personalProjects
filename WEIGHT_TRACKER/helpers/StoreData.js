const [weightData, setWeightData] = useState([]);

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user_info', jsonValue);
    console.log(jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user_info');
    setWeightData(JSON.parse(jsonValue))
  } catch (e) {
    console.log(error);
  }
};

useLayoutEffect(() => {
  storeData(userInfo);
  getData();
}, [])
console.log(weightData);