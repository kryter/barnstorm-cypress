/// <reference types="cypress" />

import { TextBoxMechanic, TextBoxMechanicOptions } from '@kryter/barnstorm/lib/mechanics/TextBoxMechanic';

export class CypressTextBoxMechanic extends TextBoxMechanic {
  constructor(options: TextBoxMechanicOptions) {
    super(options);
  }

  public verifyIsInFocus(): void {
    cy.get(this.options.textBoxSelector).should('have.focus');
  }

  public enterText(textToType: string): void {
    cy.get(this.options.textBoxSelector).type(textToType);
  }

  public verifyText(expectedText: string): void {
    cy.get(this.options.textBoxSelector).contains(expectedText);
  }
}