export function setLang (state, data) {
  state.lang = data
}

export function unsetLang (state) {
  state.lang = 'ru'
}

export function addUser (state, user) {
  state.allLogins[user['login']] = state.id
  state.users.push(user)
  state.id++
}

export function signIn (state, user) {
  state.auth = true
  state.currUser = user
}

export function signOut (state, user) {
  state.auth = false
  state.currUser = null
}

export function changeUser (state, user) {
  let id = state.allLogins[state.currUser['login']]
  delete state.allLogins[state.currUser['login']]
  state.allLogins[user['login']] = id
  state.currUser = user
}
