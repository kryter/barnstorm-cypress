/// <reference types="cypress" />

import { TextAreaMechanic, TextAreaMechanicOptions } from '@kryter/barnstorm/lib/mechanics/TextAreaMechanic';

export class CypressTextAreaMechanic extends TextAreaMechanic {
  constructor(options: TextAreaMechanicOptions) {
    super(options);
  }

  public enterText(textToType: string): void {
    cy.get(this.options.textAreaSelector).type(textToType);
  }

  public verifyText(expectedText: string): void {
    cy.get(this.options.textAreaSelector).contains(expectedText);
  }
}