// https://docs.cypress.io/app/references/assertions


describe("Assertions Demo", () => {
  let url =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  it("Implicit Assertions", () => {
    cy.visit(url);

    /* cy.url().should("include", "orangehrmlive.com");
       cy.url().should("eq", url);
       cy.url().should("contain", "orangehrmlive"); */

    /* cy.url()
      .should("include", "orangehrmlive.com")
      .should("eq", url)
      .should("contain", "orangehrmlive"); */

    cy.url()
      .should("include", "orangehrmlive.com")
      .and("eq", url)
      .and("contain", "orangehrmlive")
      .and("not.contain", "greenhrm");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    // Check Orange HRM logo i.e. element present or not
    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    // Check all the links present on the current web page
    cy.xpath("//a").should("have.length", 5);

    cy.get("input[placeholder='Username']").type("Admin"); // Provide a into username input box
    cy.get("input[placeholder='Username']").should("have.value", "Admin");
  });

  it("Explicit Assertions", () => {
    cy.visit(url);

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expectedName = "abdul allavudeen";
    cy.get(".oxd-userdropdown-name").then((element) => {
      let actualName = element.text();
      // BDD Style Assertions
      expect(actualName).to.equal(expectedName);
      expect(actualName).to.not.equal(expectedName);

      // TDD Style Assertions
      assert.equal(actualName, expectedName);
      assert.notEqual(actualName, expectedName);
    });
  });
});
