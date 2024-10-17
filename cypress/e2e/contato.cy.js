describe("Agenda de Contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir um novo contato", () => {
    cy.get('input[placeholder="Nome"]').type("Novo Contato");
    cy.get('input[placeholder="E-mail"]').type("contato@teste.com");
    cy.get('input[placeholder="Telefone"]').type("123456789");
    cy.contains("Adicionar").click();
    cy.contains("Novo Contato").should("exist");
  });

  it("Deve alterar um contato", () => {
    cy.contains("Novo Contato").should("exist");
    cy.contains("Editar").click();
    cy.get('input[placeholder="Nome"]').clear().type("Contato Alterado FLA");
    cy.get('input[placeholder="E-mail"]').clear().type("contato@teste.com");
    cy.get('input[placeholder="Telefone"]').clear().type("99999999999");
    cy.contains("Salvar").click();
    cy.contains("Contato Alterado FLA").should("exist");
  });

  it("Deve remover um contato", () => {
    cy.contains("Contato Alterado FLA").should("exist");
    cy.contains("Deletar").click();
    cy.contains("Contato Alterado FLA").should("not.exist");
  });
});
