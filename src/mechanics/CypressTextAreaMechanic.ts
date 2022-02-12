/// <reference types="cypress" />

import { Selector } from '@kryter/barnstorm/lib/instruments/uiElement/Selector';
import { TextAreaMechanic } from '@kryter/barnstorm/lib/mechanics/textArea/TextAreaMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressTextAreaMechanic implements TextAreaMechanic {
  public enterText(selector: Selector, textToType: string): void {
    getCypressElement(selector).type(textToType);
  }

  public verifyTextContent(selector: Selector, expectedText: string): void {
    getCypressElement(selector).should('have.value', expectedText);
  }
}
