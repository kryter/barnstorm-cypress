/// <reference types="cypress" />

import { ButtonMechanic } from '@kryter/barnstorm/lib/mechanics/button/ButtonMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressButtonMechanic implements ButtonMechanic {
  public click(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector).click();
  }
}
