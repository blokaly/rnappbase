import React, {Component} from 'react'
import {View} from 'react-native'
import AddTodo from '../containers/AddTodo'
import Filters from '../../components/Filters'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
          <AddTodo/>
          <Filters/>
        <VisibleTodoList/>
      </View>
    );
  }
}
