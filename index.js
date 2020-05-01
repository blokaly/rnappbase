import React from 'react'
import { AppRegistry } from 'react-native';
import { Root } from "native-base";
import App from './app/index';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './app/redux/reducers'

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);


const app = () => {
  return (

    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>
  )
};

AppRegistry.registerComponent(appName, () => app);
