import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, senha } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      senha
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', user.id);

    yield put(signInSuccess(token, user));

    history.push('/');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seu email/senha');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { nome, whatsapp, email, cpf, senha } = payload;

    yield call(api.post, 'users', {
      nome,
      whatsapp,
      email,
      cpf,
      senha
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut)
]);
