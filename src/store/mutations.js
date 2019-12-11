export function setLang (state, data) {
  state.lang = data
}

export function unsetLang (state) {
  state.lang = 'ru'
}

export function addUser (state, user) {
  state.allLogins[user['login']] = state.id
  let md5 = require('md5')
  user['password'] = md5(user['password'])
  state.users.push(user)
  state.id++
}

export function signIn (state, userLogin) {
  state.auth = true
  state.currUser = state.users[state.allLogins[userLogin]]
}

export function signOut (state) {
  state.auth = false
  state.currUser = null
}

export function changeUser (state, user) {
  let md5 = require('md5')
  user['password'] = md5(user['password'])
  let id = state.allLogins[state.currUser['login']]
  delete state.allLogins[state.currUser['login']]
  state.allLogins[user['login']] = id
  state.currUser = user
  state.users[id] = user
}
