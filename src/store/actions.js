export function setLang (contex, data) {
  contex.commit('setLang', data)
}

export function setLogin (contex, data) {
  contex.commit('setLogin', data)
}

export function setPassword (contex, data) {
  contex.commit('setPassword', data)
}

export function setAuth (contex) {
  contex.commit('setAuth', true)
}

export function unsetStorage (contex) {
  contex.commit('unsetLang')
  contex.commit('unsetUserName')
  contex.commit('unsetAuth')
}
