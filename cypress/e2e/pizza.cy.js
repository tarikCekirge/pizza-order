/// <reference types="cypress" />

describe("Navigation Test", () => {
  it("Anasayfadan sipariş sayfasına gitmeli", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("ACIKTIM").click();
    cy.url().should("include", "/order");
  });
});

describe("Order Page Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("Boyut seçilebilmeli", () => {
    cy.get("input[name='selectedSize']").first().check();
    cy.get("input[name='selectedSize']:checked").should("exist");
  });

  it("Hamur seçilebilmeli", () => {
    cy.get("select[name='selectedCrust']").select("İnce");
    cy.get("select[name='selectedCrust']").should("have.value", "ince");
  });

  it("En az 4 malzeme seçilmeli", () => {
    cy.get("input[type='checkbox']").each(($checkbox, index) => {
      if (index < 4) {
        cy.wrap($checkbox).check();
      }
    });
    cy.get("input[type='checkbox']:checked").should("have.length.at.least", 4);
  });

  it("Müşteri adı girilmeli", () => {
    cy.get("input[name='customer']").type("Ali");
    cy.get("input[name='customer']").should("have.value", "Ali");
  });

  it("Sipariş notu girilebilmeli", () => {
    cy.get("textarea[name='orderNote']").type("Ekstra sos istiyorum.");
    cy.get("textarea[name='orderNote']").should(
      "have.value",
      "Ekstra sos istiyorum."
    );
  });
  it("Geçersiz form hata vermeli", () => {
    cy.get("button[type='submit']").should("be.disabled");
    cy.get("button[type='submit']").click({ force: true });
  });

  it("Geçerli bir sipariş verilmeli", () => {
    cy.get("input[name='selectedSize']").first().check();
    cy.get("select[name='selectedCrust']").select("İnce");
    cy.get("input[type='checkbox']").each(($checkbox, index) => {
      if (index < 4) {
        cy.wrap($checkbox).check({ force: true });
      }
    });
    cy.get("input[type='checkbox']:checked").should("have.length.at.least", 4);

    cy.get("input[name='customer']").type("Ali");

    cy.get("button[type='submit']").click({ force: true });

    cy.wait(2000);

    cy.url().should("include", "/success");
  });
});
