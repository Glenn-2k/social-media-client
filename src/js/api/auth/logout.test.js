import { localStorageMock } from '../mocks/localStorageMock.js'
import { logout } from './logout'

describe('logout', () => {
  beforeEach(() => {
    global.localStorage = localStorageMock()
  })
  afterEach(() => {
    global.localStorage.clear()
  })
  it('clears the token from localStorage', () => {
    const accessToken = 'fake-token'
    localStorage.setItem('token', accessToken)
    logout()
    expect(localStorage.getItem('token')).toBe(null)
  })
})
