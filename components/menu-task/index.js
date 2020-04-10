import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-elements'
import { style } from './style'
import Modal from 'react-native-modal'

const MenuTask = ({isVisible, onDisapearCallback, onDeleteCallback, onChangeStatusCallback}) => {
    return (
        <TouchableWithoutFeedback onPress={() => onDisapearCallback()}>
            <Modal isVisible={isVisible} animationIn={'zoomInDown'} animationOut={'zoomOutUp'} animationInTiming={1000} animationOutTiming={1000} backdropTransitionInTiming={1000} backdropTransitionOutTiming={1000} >
                <TouchableWithoutFeedback>
                    <View style={style.modal}>
                        <View style={style.textView}>
                            <Text>Que souhaitez vous faire sur la tache ?</Text>
                        </View>
                        <View>
                            <Button buttonStyle={style.buttonDelete} title="Supprimer" onPress={() => onDeleteCallback()} />
                            <Button buttonStyle={style.buttonChangeStatus} title="Changer status" onPress={() => onChangeStatusCallback()} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </TouchableWithoutFeedback>
    )
}

export default MenuTask