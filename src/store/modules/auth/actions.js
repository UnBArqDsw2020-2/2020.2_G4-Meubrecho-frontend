export function signInRequest(email, senha) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, senha }
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user }
  };
}

export function signUpRequest(nome, whatsapp, email, cpf, senha) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { nome, whatsapp, email, cpf, senha }
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  };
}
