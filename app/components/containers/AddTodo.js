import React, {Component} from 'react'
import {View,} from 'react-native'
import {Button, Input, Item, Text} from 'native-base';
import {connect} from 'react-redux'
import {addTodo} from '../../redux/actions'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.inputValue = '';
    }

    render(){
        let { dispatch } = this.props;
        return (
          <View >
            <Item rounded>
              <Input placeholder='Add ToDo' onChangeText={text => this.inputValue = text}/>
            </Item>
            <Button rounded onPress={() => dispatch(addTodo(this.inputValue))}><Text>add</Text></Button>
          </View>
        )
    }
}

export default connect()(AddTodo)
