import React from 'react'
import { Text, View } from 'react-native'
import { headerStyle } from './style'

const Header = ({title}) => {
    return (
        <View>
            <View style={headerStyle.subHeader} />
            <View style={headerStyle.header}>
                <Text style={headerStyle.text}>{title}</Text>
            </View>
        </View>
    )
}

export default Header;