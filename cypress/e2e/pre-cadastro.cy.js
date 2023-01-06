/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('Funcionalidade Pré Cadastro', ()=>{

  beforeEach(()=>{
    cy.visit("my-account");
  })

  it('Deve completar o pré cadastro com sucesso', ()=>{
    
    let NomeFaker = faker.name.firstName()
    let emailFaker = faker.internet.email(NomeFaker)
    let sobrenomeFake = faker.name.lastName()
  

    cy.get('#reg_email').type(emailFaker);
    cy.get('#reg_password').type('$_Ewhdr4*1723!13')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(NomeFaker)
    cy.get('#account_last_name').type(sobrenomeFake)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')

  })
})