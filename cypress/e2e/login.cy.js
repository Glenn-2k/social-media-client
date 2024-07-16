describe('Login flow', () => {
  it('should deny empty input submit', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('#registerModal').contains('Login').click()
    cy.wait(500)
    cy.get('#loginForm').should('be.visible')
    cy.get('button[type=submit]').contains('Login').click()
    cy.get('#loginEmail:invalid')
      .should('exist')
      .then(($input) => {
        const message = $input[0].validationMessage
        cy.task('log', `Validation Message: ${message}`)
      })
  })

  it('should deny empty password input', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('#registerModal').contains('Login').click()
    cy.wait(500)
    cy.get('#loginForm').should('be.visible')
    cy.get('#loginEmail').type(Cypress.env('correctEmail'))
    cy.get('button[type=submit]').contains('Login').click()
    cy.get('#loginPassword:invalid')
      .should('exist')
      .then(($input) => {
        const message = $input[0].validationMessage
        cy.task('log', `Validation Message: ${message}`)
      })
  })

  it('should deny invalid email', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('#registerModal').contains('Login').click()
    cy.wait(500)
    cy.get('#loginForm').should('be.visible')
    cy.get('#loginEmail').type(Cypress.env('wrongEmail'))
    cy.get('button[type=submit]').contains('Login').click()
    cy.get('#loginEmail:invalid')
      .should('exist')
      .then(($input) => {
        const message = $input[0].validationMessage
        cy.task('log', `Validation Message: ${message}`)
      })
  })

  it('should deny wrong password', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('#registerModal').contains('Login').click()
    cy.wait(500)
    cy.get('#loginForm').should('be.visible')
    cy.get('#loginEmail').type(Cypress.env('correctEmail'))
    cy.get('#loginPassword').type(Cypress.env('wrongPassword'))
    cy.wait(500)
    cy.get('button[type=submit]').contains('Login').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Either your username was not found or your password is incorrect',
      )
    })

    it('should allow a valid user to log in', () => {
      cy.visit('/')
      cy.wait(500)
      cy.get('#registerModal').contains('Login').click()
      cy.wait(500)
      cy.get('#loginForm').should('be.visible')
      cy.get('#loginEmail').type(Cypress.env('correctEmail'))
      cy.get('#loginPassword').type(Cypress.env('correctPassword'))
      cy.get('button[type=submit]').contains('Login').click()
    })
  })
})
