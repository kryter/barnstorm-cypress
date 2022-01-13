/// <reference types="cypress" />

import { KeyboardMechanic } from '@kryter/barnstorm/lib/mechanics/keyboard/KeyboardMechanic';

export class CypressKeyboardMechanic implements KeyboardMechanic {
  public pressEnter(): void {
    cy.get('body').type('{enter}');
  }

  public pressEscape(): void {
    cy.get('body').type('{esc}');
  }

  public pressSpacebar(): void {
    cy.get('body').type(' ');
  }

  public pressDelete(): void {
    cy.get('body').type('{del}');
  }

  public pressBackspace(): void {
    cy.get('body').type('{backspace}');
  }

  public pressUpArrow(): void {
    cy.get('body').type('{uparrow}');
  }

  public pressDownArrow(): void {
    cy.get('body').type('{downarrow}');
  }

  public pressRightArrow(): void {
    cy.get('body').type('{rightarrow}');
  }

  public pressLeftArrow(): void {
    cy.get('body').type('{leftarrow}');
  }

  public typeKeys(keys: string): void {
    cy.get('body').type(keys);
  }
}
