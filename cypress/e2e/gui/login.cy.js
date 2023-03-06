describe('Teste de login', () => {
    it.only('Efetua login com sucesso', () => {
      cy.visit('http://localhost/techtext-tcs-senac/Frontend/index.php')
      cy.get('.detalhes-nome > .field > input').type('admin')
      cy.get(':nth-child(3) > input').type('123456')
      cy.get('.button > input').click()
      cy.url().should('include', 'http://localhost/techtext-tcs-senac/Frontend/usuarios.php')
    })
  
    it.only('Exibe mensagem de erro para login inválido', () => {
      cy.visit('http://localhost/techtext-tcs-senac/Frontend/index.php')
      cy.get('.detalhes-nome > .field > input').type('admi')
      cy.get(':nth-child(3) > input').type('12345')
      cy.get('.button > input').click()
      cy.get('Esse nome de usuário não existe!').should('be.visible')
    })
  })
  