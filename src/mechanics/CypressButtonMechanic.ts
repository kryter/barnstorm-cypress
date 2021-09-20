/// <reference types="cypress" />

import { ButtonMechanic } from '@kryter/barnstorm/lib/mechanics/ButtonMechanic';

export class CypressButtonMechanic implements ButtonMechanic {
  public click(selector: string): void {
    cy.get(selector).click();
  }
}
