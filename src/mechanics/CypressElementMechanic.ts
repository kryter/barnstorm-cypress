/// <reference types="cypress" />

import { ElementMechanic } from '@kryter/barnstorm/lib/mechanics/element/ElementMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressElementMechanic implements ElementMechanic {
  public verifyIsNotVisible(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector).should('not.be.visible');
  }

  public verifyIsVisible(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector).should('be.visible');
  }

  public verifyIsNotPresent(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector).should('not.exist');
  }

  public verifyIsPresent(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector).should('exist');
  }

  public verifyTextContent(
    selector: string,
    expectedContent: string,
    iFrameSelector?: string
  ): void {
    getCypressElement(selector, iFrameSelector).should(
      'have.text',
      expectedContent
    );
  }

  public verifyHasClass(
    selector: string,
    className: string,
    iFrameSelector?: string
  ): void {
    getCypressElement(selector, iFrameSelector).should('have.class', className);
  }

  public verifyDoesNotHaveClass(
    selector: string,
    className: string,
    iFrameSelector?: string
  ): void {
    getCypressElement(selector, iFrameSelector).should(
      'not.have.class',
      className
    );
  }

  public verifyIsInFocus(selector: string, iFrameSelector?: string): void {
    getCypressElement(selector, iFrameSelector)
      .focused()
      .should('to.have.lengthOf', 1);
  }

  public verifyCssProperty(
    selector: string,
    propertyKey: string,
    propertyValue: string,
    iFrameSelector?: string
  ): void {
    getCypressElement(selector, iFrameSelector).should(
      'have.css',
      propertyKey,
      propertyValue
    );
  }
}
