/// <reference types="cypress" />

import { UrlMechanic, UrlMechanicOptions } from '@kryter/barnstorm/lib/mechanics/UrlMechanic';

export class CypressUrlMechanic extends UrlMechanic {
  constructor(options: UrlMechanicOptions) {
    super(options);
  }

  public visit(): void {
    cy.visit(this.options.url);
  }

  public verifyUrl(): void {
    cy.url().should('eq', this.options.url);
  }
}
