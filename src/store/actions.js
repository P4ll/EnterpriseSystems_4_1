export function setLang (contex, data) {
  contex.commit('setLang', data)
}

export function addUser (contex, data) {
  contex.commit('addUser', data)
}

export function signIn (contex, data) {
  contex.commit('signIn', data)
}

export function signOut (contex, data) {
  contex.commit('signOut', data)
}

export function changeUser (contex, data) {
  contex.commit('changeUser', data)
}
