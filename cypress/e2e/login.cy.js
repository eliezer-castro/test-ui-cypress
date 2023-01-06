/// <reference types="cypress" />

/*  - Captura o elemento
*     Botão, Campo, Formulário, Combo, Check, Texto, etc
*
*   - Inserir uma ação para o elelemento
*     Clicar, arrastar, digitar, checar, etc
*
*   - Resultado esperado para o teste
*     Deve fazer algo 
*/

context('funcionalidade login', ()=>{
  it('Deve fazer login com sucesso', ()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  })

  it('deve exibir uma mensagem de erro ao inserir senha invalidos', ()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail')
  })

  it('deve exibir uma mensagem de erro ao inserir usuário', ()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    cy.get('#username').type('aluno@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail')
  })
});