import { save } from '../../storage/index.js'
import { login } from './login.js'

jest.mock('../../storage/index.js', () => ({
  save: jest.fn(), // mocking the save function
}))

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
      'https://api.example.com/social/auth/login',
      {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
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
