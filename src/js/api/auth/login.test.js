import { save } from '../../storage/index.js'
import { login } from './login.js'
import { localStorageMock } from '../mocks/localStorageMock.js'

jest.mock('../../storage/index.js', () => ({
  save: jest.fn(),
  load: jest.fn(() => 'mock-token'),
}))

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock(),
})

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({ accessToken: 'fake-token', name: 'Ola Nordmann' }),
  }),
)

describe('login', () => {
  it('should log the user in and store the token in local storage when login is successful', async () => {
    const email = 'test@mail.com'
    const password = 'password123'

    const profile = await login(email, password)

    expect(fetch).toHaveBeenCalledWith(
      'https://nf-api.onrender.com/api/v1/social/auth/login',
      {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer mock-token',
        },
      },
    )

    expect(save).toHaveBeenCalledWith('token', 'fake-token')
    expect(save).toHaveBeenCalledWith('profile', { name: 'Ola Nordmann' })
    expect(profile).toEqual({ name: 'Ola Nordmann' })
  })

  it('should throw an error when login is unsuccessful', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      }),
    )

    await expect(login('wrong@mail.com', 'wrongpassword')).rejects.toThrow(
      'Unauthorized',
    )
  })
})
