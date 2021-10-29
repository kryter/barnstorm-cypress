/// <reference types="cypress" />

import { ElementMechanic } from '@kryter/barnstorm/lib/mechanics/element/ElementMechanic';

export class CypressElementMechanic implements ElementMechanic {
  public verifyIsNotVisible(selector: string): void {
    cy.get(selector).should('not.be.visible');
  }

  public verifyTextContent(selector: string, expectedContent: string): void {
    cy.get(selector).should('have.text', expectedContent);
  }

  public verifyHasClass(selector: string, className: string): void {
    cy.get(selector).should('have.class', className);
  }

  public verifyDoesNotHaveClass(selector: string, className: string): void {
    cy.get(selector).should('not.have.class', className);
  }

  public verifyIsInFocus(selector: string): void {
    cy.get(selector).focused().should('to.have.lengthOf', 1);
  }
}
