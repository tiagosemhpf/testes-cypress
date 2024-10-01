/// <reference types='cypress' />

describe("Teste para a home", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    it("Deve adicionar informações no formulário", () => {
        cy.get('input[type="text"]').type("Tiago Pereira");
        cy.get('input[type="email"]').type("tiago_pereira@gmail.com");
        cy.get('input[type="tel"]').type("439987459856");
        cy.contains("Adicionar").click();
        cy.screenshot("teste-incluir");
    });
    it("Deve alterar a informação da lista", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('input[type="text"]').clear().type("Maria Eduarda");
        cy.get('input[type="email"]').clear().type("maria_eduarda@gamil.com");
        cy.get('input[type="tel"]').clear().type("439987459856");
        cy.get(".alterar").click();
        cy.screenshot("teste-editar");
    });
    it("Deve excluír um contato da lista", () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
        cy.screenshot("teste-remover");
    });
});