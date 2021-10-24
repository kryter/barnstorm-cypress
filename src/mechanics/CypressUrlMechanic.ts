/// <reference types="cypress" />

import { UrlMechanic } from "@kryter/barnstorm/lib/mechanics/UrlMechanic";

export class CypressUrlMechanic implements UrlMechanic {
  public visit(url: string): void {
    cy.visit(url);
  }

  public verifyUrl(expectedUrl: string): void {
    cy.url().should("eq", expectedUrl);
  }
}
