/// <reference types="cypress" />

import { KeyboardMechanic } from '@kryter/barnstorm/lib/mechanics/keyboard/KeyboardMechanic';

export class CypressKeyboardMechanic implements KeyboardMechanic {
  public pressEnter(): void {
    cy.get('body').type('{enter}');
  }
}
