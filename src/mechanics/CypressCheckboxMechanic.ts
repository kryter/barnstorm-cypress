/// <reference types="cypress" />

import { CheckboxMechanic, CheckboxMechanicOptions } from '@kryter/barnstorm/lib/mechanics/CheckboxMechanic';

export class CypressCheckboxMechanic extends CheckboxMechanic {
  constructor(options: CheckboxMechanicOptions) {
    super(options);
  }

  public toggle(): void {
    cy.get(this.options.checkboxSelector).click();
  }

  public verifyCheckedState(expectedIsChecked: boolean): void {
    if (expectedIsChecked) {
      cy.get(this.options.checkboxSelector).should('have.attr', 'checked');
    } else {
      cy.get(this.options.checkboxSelector).should('not.have.attr', 'checked');
    }
  }
}