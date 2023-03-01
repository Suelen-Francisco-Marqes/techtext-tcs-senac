describe('Netflix', () => {
  const user = Cypress.env('user_name')
  const password = Cypress.env('user_password')
  const options = { cacheSession: false }
  beforeEach( () => {
    cy.visit('http://localhost/techtext-tcs-senac/Frontend/index.php')
  })

it('Preencher o usuario e senha validos, deve entrar na aplicação', function () {

  cy.get('.detalhes-nome > .field > input').type('admin')
  cy.get(':nth-child(3) > input').type('123456')
  cy.get('.button > input').click()
  })

  it('Preencher o usuario que não existe no sistema, deverá aparece que a mesagem que, Esse não de usuario não existe!', function () {
  
    cy.get('.detalhes-nome > .field > input').type('teste')
    cy.get(':nth-child(3) > input').type('123456')
    cy.get('.button > input').click()
    
    cy.get('.error').should('be.visible')  
  })

  it('Preencher a senha incorreta, o sistema deverá mostra que o nome ou senha estão incorretos!', function () {
  
    cy.get('.detalhes-nome > .field > input').type('admin')
    cy.get(':nth-child(3) > input').type('654321')
    cy.get('.button > input').click()
    
    cy.get('.error').should('be.visible')  
  })
  

})