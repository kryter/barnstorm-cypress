/// <reference types="cypress" />

import { TextBoxMechanic } from '@kryter/barnstorm/lib/mechanics/textBox/TextBoxMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressTextBoxMechanic implements TextBoxMechanic {
  public verifyIsInFocus(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector).should('have.focus');
  }

  public enterText(
    selector: string,
    textToType: string,
    iFrameSelector?: string
  ): void {
    getCypressElement(selector, iFrameSelector).type(textToType);
  }

  public verifyTextContent(
    selector: string,
    expectedText: string,
    iFrameSelector?: string
  ): void {
    getCypressElement(selector, iFrameSelector).should(
      'have.value',
      expectedText
    );
  }
}
