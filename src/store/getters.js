export function getLang (state) {
  return state.lang
}

export function existUser (state, userLogin) {
  return userLogin in state.allLogins
}

export function isSignedUp (state, userLogin, userPassword) {
  let md5 = require('md5')
  let passwordHash = md5(userPassword)
  let actualPasshash = state.users[state.allLogins[userLogin]]['password']
  return passwordHash === actualPasshash
}

export function getCurrUser (state) {
  return state.currUser
}

export function isAuthorized (state) {
  return state.auth
}

export function getUserId (state, userLogin) {
  return state.allLogins[userLogin]
}

export function getUserById (state, userId) {
  return state.users[userId]
}
