/// <reference types="cypress" />

import { CheckboxMechanic } from '@kryter/barnstorm/lib/mechanics/checkbox/CheckboxMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressCheckboxMechanic implements CheckboxMechanic {
  public toggle(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector).click();
  }

  public verifyCheckedState(
    selector: string,
    expectedIsChecked: boolean,
    iFrameSelector?: string
  ): void {
    if (expectedIsChecked) {
      getCypressElement(selector, iFrameSelector).should('be.checked');
    } else {
      getCypressElement(selector, iFrameSelector).should('not.be.checked');
    }
  }
}
