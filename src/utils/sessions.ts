const USER_ID = 'user-id'
const ACCESS_TOKEN = 'access-token'
const EXPIRE_ON = 'expiredOn'
const USERNAME = 'username'

interface JwtToken {
  token: string
  userId: string
  userName: string
  expires: Date
}

const saveUserId = (userId: string) => localStorage.setItem(USER_ID, userId)
const saveToken = (token: string) => localStorage.setItem(ACCESS_TOKEN, token)
const saveExpiredOn = (expiredOn: Date) => localStorage.setItem(EXPIRE_ON, `${expiredOn}`)
const saveUsername = (username: string) => localStorage.setItem(USERNAME, username)

const retrieveUserId = () => localStorage.getItem(USER_ID)
const retrieveToken = () => localStorage.getItem(ACCESS_TOKEN)
const retrieveExpiredOn = () => localStorage.getItem(EXPIRE_ON)
const retrieveUsername = () => localStorage.getItem(USERNAME)

const saveSession = (token: JwtToken) => {
  saveUserId(token.userId)
  saveToken(token.token)
  saveExpiredOn(token.expires)
  saveUsername(token.userName)
}

const clearSession = () => {
  localStorage.removeItem(USERNAME)
  localStorage.removeItem(USER_ID)
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(EXPIRE_ON)
}

const isAuthenticated = () => {
  const token = retrieveToken()
  const expiredOn = retrieveExpiredOn()

  if (token && expiredOn) {
    return true
  }

  return false
}

export { saveSession, isAuthenticated, retrieveToken, retrieveUserId, retrieveUsername, clearSession }
