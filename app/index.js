import React, {Component} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/screens/HomeScreen'
import ProfileScreen from './components/screens/ProfileScreen'

const Tab = createBottomTabNavigator();

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      )
    }
}

export default App;
