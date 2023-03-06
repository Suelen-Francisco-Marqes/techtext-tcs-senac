describe('Teste de login e navegação', () => {
    it('Efetua login com sucesso e navega para outra página', () => {
      // Visita a página de login
      cy.visit('http://localhost/techtext-tcs-senac/Frontend/index.php')
  
      // Preenche os campos de login
      cy.get('.detalhes-nome > .field > input').type('admin')
      cy.get(':nth-child(3) > input').type('123456')
  
      // Clica no botão de login
      cy.get('.button > input').click()
  
      // Verifica se o login foi bem sucedido
      cy.url().should('include', 'http://localhost/techtext-tcs-senac/Frontend/usuarios.php')
  
      // Navega para outra página
      cy.get('http://localhost/techtext-tcs-senac/Frontend/novo_produto.php').click()
  
      // Verifica se a nova página foi carregada corretamente
      cy.url().should('include', 'http://localhost/techtext-tcs-senac/Frontend/novo_produto.php')
    })
  })
  