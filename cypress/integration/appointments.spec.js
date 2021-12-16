describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset"); // Reset the database before running each test case
    cy.visit("/");
    cy.contains("Monday"); // Check the page has finished loading
  });

  it("should book an interview", () => {
    cy.get("[alt=Add]")
      .first()
      .click();
    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones");
    cy.get("[alt='Sylvia Palmer']")
      .click();
    cy.contains("Save")
      .click();
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .click({ force: true }); // Need to force since button is only visible when hovering
    cy.get("[alt='Tori Malcolm']")
      .click();
    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Courtney Longbottom");
    cy.contains("Save")
      .click();
    cy.contains(".appointment__card--show", "Courtney Longbottom");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .click({ force: true });
    cy.contains("Confirm")
      .click();
    cy.contains("Deleting")
      .should("exist");
    cy.contains("Deleting")
      .should("not.exist");
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });
});