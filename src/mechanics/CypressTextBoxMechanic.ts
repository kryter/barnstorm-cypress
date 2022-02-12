/// <reference types="cypress" />

import { Selector } from '@kryter/barnstorm/lib/instruments/uiElement/Selector';
import { TextBoxMechanic } from '@kryter/barnstorm/lib/mechanics/textBox/TextBoxMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressTextBoxMechanic implements TextBoxMechanic {
  public verifyIsInFocus(selector: Selector): void {
    getCypressElement(selector).should('have.focus');
  }

  public enterText(selector: Selector, textToType: string): void {
    getCypressElement(selector).type(textToType);
  }

  public verifyTextContent(selector: Selector, expectedText: string): void {
    getCypressElement(selector).should('have.value', expectedText);
  }
}
