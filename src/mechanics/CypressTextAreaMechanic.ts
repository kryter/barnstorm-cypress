/// <reference types="cypress" />

import { TextAreaMechanic } from '@kryter/barnstorm/lib/mechanics/TextAreaMechanic';

export class CypressTextAreaMechanic implements TextAreaMechanic {
  public enterText(selector: string, textToType: string): void {
    cy.get(selector).type(textToType);
  }

  public verifyText(selector: string, expectedText: string): void {
    cy.get(selector).contains(expectedText);
  }
}
