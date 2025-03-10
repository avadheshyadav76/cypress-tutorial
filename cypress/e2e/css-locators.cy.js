describe("CSSLocators", () => {
  it("css locators", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("#search_query_top").type("T-Shirts"); // Identify the search box input and type T-Shirts
    // cy.get(".search_query").type("T-Shirts"); // class selector
    // cy.get("[name='search_query']").type("T-Shirts"); // attribute selector
    cy.get("[name='submit_search']").click(); // Identify the submit button and click
    cy.get(".lighter").contains("T-Shirts"); 
  });
});
