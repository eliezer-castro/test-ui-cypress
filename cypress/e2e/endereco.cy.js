/// <reference types="cypress" />
//import EnderecoPage from '../fixtures/endereco.json'
const dadosEndereco = require('../fixtures/endereco.json')


import EnderecoPage from '../support/pages-objects/endereco.page'

describe('funcionalidade de endereços - faturamento e entrega', () => {
  beforeEach(() => {
    cy.visit('minha conta');
    cy.fixture('perfil').then(dados =>{
      cy.login(dados.usuario, dados.senha)
    })
  });
  
    it('Deve fazer cadastro de faturamento com sucesso', () => {
      EnderecoPage.editarEnderecoFaturamento('Eliezer', 'Castro', 'Kothe', 'Brasil', 'Rua Maria Alice', '711', 'Gravatá', 'Pernambuco', '55641520', '+5563995124511', 'faturamento@mail.com')
      cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
      EnderecoPage.editarEnderecoFaturamento(
        dadosEndereco[1].nome, 
        dadosEndereco[1].sobrenome, 
        dadosEndereco[1].empresa,
        dadosEndereco[1].pais,
        dadosEndereco[1].endereco,
        dadosEndereco[1].numero,
        dadosEndereco[1].cidade,
        dadosEndereco[1].estado,
        dadosEndereco[1].cep,
        dadosEndereco[1].telefone,
        dadosEndereco[1].email
        )
      cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
    
});
