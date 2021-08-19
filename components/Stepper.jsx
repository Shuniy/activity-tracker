import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Stepper extends Component {
    render() {
        const {name, value, onIncrement, onDecrement} = this.props
        return (
            <View>
                <Text> {name} Stepper : value : {value} </Text>
            </View>
        )
    }
}

export default Stepper
