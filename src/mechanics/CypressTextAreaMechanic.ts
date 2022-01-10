/// <reference types="cypress" />

import { TextAreaMechanic } from '@kryter/barnstorm/lib/mechanics/textArea/TextAreaMechanic';

export class CypressTextAreaMechanic implements TextAreaMechanic {
  public enterText(selector: string, textToType: string): void {
    cy.get(selector).type(textToType);
  }

  public verifyText(selector: string, expectedText: string): void {
    cy.get(selector).should('have.value', expectedText);
  }
}
