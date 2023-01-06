/// <reference types="cypress" />

describe("Funcionalidades pagina de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]')
    // .first()
    // .last()
    //.contains('Ajax Full-Zip Sweatshirt')
    .eq(3)
    .click();
  });

  it.only('Deve adicionar um produto ao carrinho', ()=>{

    const qtdProduto = 5;

    cy.get('[class="product-block grid"]')
    .eq(4)
    .click();

    cy.get('.button-variable-item-XL').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(qtdProduto)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtdProduto)
    cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
  })
});