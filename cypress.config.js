const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    correctEmail: 'TEST123TEST@noroff.no',
    correctPassword: 'TEST12345',
    wrongEmail: 'wrongEmail@wrong.wrong',
    wrongPassword: 'wrongPassword',
    shortPassword: 'short',
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
  },
})
