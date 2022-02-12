/// <reference types="cypress" />

import { Selector } from '@kryter/barnstorm/lib/instruments/uiElement/Selector';
import { ButtonMechanic } from '@kryter/barnstorm/lib/mechanics/button/ButtonMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressButtonMechanic implements ButtonMechanic {
  public click(selector: Selector): void {
    getCypressElement(selector).click();
  }
}
