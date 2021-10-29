/// <reference types="cypress" />

import { ButtonMechanic } from '@kryter/barnstorm/lib/mechanics/button/ButtonMechanic';

export class CypressButtonMechanic implements ButtonMechanic {
  public click(selector: string): void {
    cy.get(selector).click();
  }
}
