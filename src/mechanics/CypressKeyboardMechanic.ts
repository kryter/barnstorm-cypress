/// <reference types="cypress" />

import { KeyboardMechanic } from "@kryter/barnstorm/lib/mechanics/KeyboardMechanic";

export class CypressKeyboardMechanic implements KeyboardMechanic {
  public pressEnter(): void {
    cy.get("body").type("{enter}");
  }
}
