//<reference types="Cypress"/>

it('Acessar aplicação', function () {


  cy.visit('http://localhost/techtext-tcs-senac/Frontend/index.php')
      
  cy.get('.detalhes-nome > .field > input').type('admin')
  cy.get(':nth-child(3) > input').type('123456')
  cy.get('.button > input').click()
})