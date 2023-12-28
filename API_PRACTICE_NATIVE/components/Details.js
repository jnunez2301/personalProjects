import { View, Text, ScrollView } from 'react-native'
import { getData } from '../hooks/getData'

export const Details = () => {
  const { data } = getData();
  return (
    <ScrollView>
        <Text>{JSON.stringify(data)}</Text>
    </ScrollView>
  )
}
