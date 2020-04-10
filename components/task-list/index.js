import React from 'react';
import {ListItem } from 'react-native-elements'
import { View } from 'react-native';
import { TASK } from '../../model';

const TaskList = ({taskList, onPressCallBack}) => {
    return (
        <View>
            {
                taskList.map((task) => (
                    <ListItem key={task.id} title={task.title}  onPress={()=>onPressCallBack(task)} badge={{ value:task.status, status: task.status===TASK.todoStatus ? 'error':'success' }} />
                ))
            }
        </View>
    )
}

export default TaskList;