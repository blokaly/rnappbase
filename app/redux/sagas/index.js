import {takeEvery} from 'redux-saga/effects'
import {workerGetUser, workerSetUser} from './user'
import {workerGetSecuritySettings, workerSetSecuritySetting} from './security'
import {workerSetRegisterData, workerSetUserPin} from './register'
import {workerSetLogin, workerSetLogout} from './auth'
import {FETCH_SECURITY_SETTINGS, SET_REGISTER_DATA, SET_ACCOUNT_PIN_CODE, SET_REMEMBER_DEVICE, FETCH_USER, SECURITY_SETTING, SET_LOGIN, SET_LOGOUT, SET_USER} from '../actions/types';

export function* registerWatchers() {
  /**
   * User watchers
   */
  yield takeEvery(FETCH_USER, workerGetUser);
  yield takeEvery(SET_USER, workerSetUser);

  /**
   * Register watchers
   */
  yield takeEvery(SET_REGISTER_DATA, workerSetRegisterData);
  yield takeEvery(SET_ACCOUNT_PIN_CODE, workerSetUserPin);

  /**
   * Auth watchers
   */
  yield takeEvery(SET_LOGIN, workerSetLogin);
  yield takeEvery(SET_LOGOUT, workerSetLogout);

  /**
   * Security Settings
   */
  yield takeEvery(FETCH_SECURITY_SETTINGS, workerGetSecuritySettings);
  yield takeEvery(SECURITY_SETTING, workerSetSecuritySetting);

}

// 3. root saga

export default function* rootSaga() {
  yield registerWatchers()
}
