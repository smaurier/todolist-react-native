import React from 'react';
import ActionButton from 'react-native-action-button'
import { APP_COLORS } from '../../styles/colors'
import {Icon} from 'react-native-elements'

function onPress() {
    console.log('add')
}

const ButtonAddTask = () => {
    return(
        <ActionButton buttonColor={APP_COLORS.primaryAction} icon={ <Icon color={APP_COLORS.primaryText} name={'add'} onPress={() => onPress()} /> }   />
    )
}

export default ButtonAddTask