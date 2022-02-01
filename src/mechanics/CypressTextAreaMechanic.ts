/// <reference types="cypress" />

import { TextAreaMechanic } from '@kryter/barnstorm/lib/mechanics/textArea/TextAreaMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressTextAreaMechanic implements TextAreaMechanic {
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
