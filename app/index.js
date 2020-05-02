import React, {Component} from "react";
import {AsyncStorage, View} from 'react-native';
import {connect} from "react-redux";
import {getUser} from "./redux/actions";
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ScanScreen from "./screens/ScanScreen";
import WelcomeScreen from "./screens/Welcome";
import RegisterScreen from "./screens/Auth/Register";
import AccountPinCodeScreen from "./screens/Auth/AccountPinCode";
import Overlay from './components/Overlay';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

AsyncStorage.getAllKeys()
  .then(keys => AsyncStorage.multiGet(keys))
  .then(items => console.log('all pure Items', items))
  .catch(error => console.warn('error get all Items', error))

class App extends Component {
    constructor(props) {
        super(props);
    }

  componentDidMount() {
    this.props.fetchUser();
  }

    render() {
      const { isLoggedIn } = this.props.auth;
      const { user, isFetching } = this.props.user;
      return (
        <View style={{flex: 1, width: '100%'}}>
          <NavigationContainer>
              {isLoggedIn ? (
                  <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Scan" component={ScanScreen} />
                  </Tab.Navigator>

              ) : (
                <Stack.Navigator>
                  <Stack.Screen name="Welcome" component={WelcomeScreen} />
                  <Stack.Screen name="Register" component={RegisterScreen} />
                  <Stack.Screen name="AccountPinCode" component={AccountPinCodeScreen} />
                </Stack.Navigator>
              )}
          </NavigationContainer>
          <Overlay />
        </View>
      );
    }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  }
}

function  mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
