/// <reference types="cypress" />

import { CheckboxMechanic } from "@kryter/barnstorm/lib/mechanics/CheckboxMechanic";

export class CypressCheckboxMechanic implements CheckboxMechanic {
  public toggle(selector: string): void {
    cy.get(selector).click();
  }

  public verifyCheckedState(
    selector: string,
    expectedIsChecked: boolean
  ): void {
    if (expectedIsChecked) {
      cy.get(selector).should("be.checked");
    } else {
      cy.get(selector).should("not.be.checked");
    }
  }
}
