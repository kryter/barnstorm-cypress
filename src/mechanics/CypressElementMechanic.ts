/// <reference types="cypress" />

import { ElementMechanic } from '@kryter/barnstorm/lib/mechanics/ElementMechanic';

export class CypressElementMechanic implements ElementMechanic {
  public verifyIsNotVisible(selector: string): void {
    cy.get(selector).should('not.be.visible');
  }

  public verifyTextContent(selector: string, expectedContent: string): void {
    cy.get(selector).should('have.text', expectedContent);
  }

  public verifyIsInFocus(selector: string): void {
    // TODO
  }
}
