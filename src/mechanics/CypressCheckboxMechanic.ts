/// <reference types="cypress" />

import { Selector } from '@kryter/barnstorm/lib/instruments/uiElement/Selector';
import { CheckboxMechanic } from '@kryter/barnstorm/lib/mechanics/checkbox/CheckboxMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressCheckboxMechanic implements CheckboxMechanic {
  public toggle(selector: Selector): void {
    getCypressElement(selector).click();
  }

  public verifyCheckedState(
    selector: Selector,
    expectedIsChecked: boolean
  ): void {
    if (expectedIsChecked) {
      getCypressElement(selector).should('be.checked');
    } else {
      getCypressElement(selector).should('not.be.checked');
    }
  }
}
