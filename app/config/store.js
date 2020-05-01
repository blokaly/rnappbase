import {createStore, applyMiddleware} from 'redux'
import app from '../redux/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../redux/sagas'
import { persistStore } from 'redux-persist'

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    let store = createStore(
        app,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middlewares));

    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store)
    return {persistor, store}
}
