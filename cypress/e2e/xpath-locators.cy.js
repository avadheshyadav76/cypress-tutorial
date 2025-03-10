describe("XPathLocators", () => {
  it("Should find out no of products", () => {
    cy.visit("http://automationpractice.com/index.php");

    // should find out all li inside ul with id homefeatured and total li should be 7
    cy.xpath("//ul[@id='homefeatured']/li").should("have.length", 7);
  });

  it("chained xpath", () => {
    cy.visit("http://automationpractice.com/index.php");

    // should find out all li inside ul with id homefeatured and total li should be 7
    cy.xpath("//ul[@id='homefeatured']").xpath("./li").should("have.length", 7);
  });
});
