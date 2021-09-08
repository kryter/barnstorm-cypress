/// <reference types="cypress" />

import { ButtonMechanic, ButtonMechanicOptions } from '@kryter/barnstorm/lib/mechanics/ButtonMechanic';

export class CypressButtonMechanic extends ButtonMechanic {
  constructor(options: ButtonMechanicOptions) {
    super(options);
  }

  public click(): void {
    cy.get(this.options.buttonSelector).click();
  }

  public verifyDoesNotExist(): void {
    cy.get(this.options.buttonSelector).should('not.be.visible');
  }

  public verifyContent(content: string): void {
    cy.get(this.options.buttonSelector).should('have.text', content);
  }
}
