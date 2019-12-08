export function setLang (state, data) {
  state.lang = data
}

export function unsetLang (state) {
  state.lang = 'ru'
}

export function setLogin (state, data) {
  state.login = data
}

export function setPassword (state, data) {
  state.password = data
}

export function unsetLogin (state) {
  state.login = ''
}

export function setAuth (state, data) {
  state.auth = data
}

export function unsetAuth (state) {
  state.auth = ''
}
