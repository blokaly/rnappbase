import { call, put, select } from "redux-saga/effects";
const getRegisterData = state => state.register;
const getRevisionID = state => state.user.user ? state.user.user._rev : null;

import {
    setLoginSuccess,
    setLogoutSuccess,
    setUser,
    setSecuritySetting
} from "../actions";

export function* workerSetLogin(action) {
    const registerData = yield select(getRegisterData)
    const revisionID = yield select(getRevisionID)

    yield put(setLoginSuccess(action))
    yield put(setUser(registerData, revisionID))

    if (registerData.pin) {
        yield put(setSecuritySetting({name: 'pincode', value: true}))
    }
}

export function* workerSetLogout(action) {
    yield put(setLogoutSuccess(action))
}
