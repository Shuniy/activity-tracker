import React from 'react'
import { View, Text } from 'react-native'

const DateHeader = (props) => {
    const {date} = props
    return (
        <View>
            <Text>{date}</Text>
        </View>
    )
}

export default DateHeader
