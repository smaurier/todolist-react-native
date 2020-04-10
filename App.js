import React from 'react';
import Header from './components/header';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import lodash from 'lodash'

import { View, ScrollView } from 'react-native';
import { TASK } from './model';


const taskList = [
  {
    id: 0,
    title: 'Aller voir Jojo',
    status: TASK.todoStatus
  },
  {
    id: 1,
    title: 'Se brosser les dents',
    status: TASK.todoStatus
  },
  {
    id: 2,
    title: 'Faire le ménage',
    status: TASK.doneStatus
  },
  {
    id: 3,
    title: 'Faire l\'application de muscu',
    status: TASK.todoStatus
  },
  {
    id: 4,
    title: 'Apprendre le webGL',
    status: TASK.doneStatus
  },
  {
    id: 5,
    title: 'Apprendre React',
    status: TASK.todoStatus
  },
  {
    id: 6,
    title: 'Apprendre React Native',
    status: TASK.doneStatus
  },
  {
    id: 7,
    title: 'Dormir',
    status: TASK.todoStatus
  },
  {
    id: 8,
    title: 'Manger',
    status: TASK.doneStatus
  },
  {
    id: 9,
    title: 'Payer loyer',
    status: TASK.todoStatus
  },
  {
    id: 10,
    title: 'Jouer de la guitare',
    status: TASK.doneStatus
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList, isMenuTaskVisible: false, currentTask: {} }
  }

  toggleMenuTaskVisibility = (task) => {
    let currentTask = task;
    if(this.state.isMenuTaskVisible){
      currentTask = {}
    }
    this.setState({isMenuTaskVisible: !this.state.isMenuTaskVisible, currentTask: task});
  }

  deleteCurrentTask = () => {
    const index = lodash.findIndex(this.state.taskList, {id:this.state.currentTask.id})
    const tmpList = this.state.taskList
    tmpList.splice(index, 1)
    this.setState({taskList:tmpList, currentTask:{}})
    this.toggleMenuTaskVisibility();
  }

  toogleTaskStatus = () => {
    const updatedTask = this.state.currentTask;
    updatedTask.status  = this.state.currentTask.status === TASK.doneStatus ? TASK.todoStatus : TASK.doneStatus;
    const index = lodash.findIndex(this.state.taskList, {id:this.state.currentTask.id});
    const updatedTaskList = this.state.taskList;
    updatedTaskList[index] = updatedTask;
    this.setState({taskList:updatedTaskList, isMenuTaskVisible: false, currentTask:{} })
  }

  render() {
    return (
      <View style={{ flex:1 }} >
        <Header title="Liste de tâches" />
        <ScrollView>
          <TaskList onPressCallBack={this.toggleMenuTaskVisibility} taskList={ this.state.taskList } />
        </ScrollView>
        <MenuTask isVisible={ this.state.isMenuTaskVisible } onDisapearCallback={this.toggleMenuTaskVisibility} onChangeStatusCallback={this.toogleTaskStatus} onDeleteCallback={this.deleteCurrentTask} />
        <ButtonAddTask />
      </View>
    );
  }
}


