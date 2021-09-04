/// <reference types="cypress" />

import { ButtonMechanic, ButtonMechanicOptions } from '@kryter/barnstorm/lib/mechanics/ButtonMechanic';

export class CypressButtonMechanic extends ButtonMechanic {
  constructor(options: ButtonMechanicOptions) {
    super(options);
  }

  public click(): void {
    cy.get(this.options.buttonSelector).click();
  }
}