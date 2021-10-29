/// <reference types="cypress" />

import { TextBoxMechanic } from '@kryter/barnstorm/lib/mechanics/textBox/TextBoxMechanic';

export class CypressTextBoxMechanic implements TextBoxMechanic {
  public verifyIsInFocus(selector: string): void {
    cy.get(selector).should('have.focus');
  }

  public enterText(selector: string, textToType: string): void {
    cy.get(selector).type(textToType);
  }

  public verifyText(selector: string, expectedText: string): void {
    cy.get(selector).contains(expectedText);
  }
}
