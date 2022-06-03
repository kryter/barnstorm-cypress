/// <reference types="cypress" />

import { Selector } from '@kryter/barnstorm/lib/instruments/uiElement/Selector';
import { ElementMechanic } from '@kryter/barnstorm/lib/mechanics/element/ElementMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressElementMechanic implements ElementMechanic {
  public verifyIsNotVisible(selector: Selector): void {
    getCypressElement(selector).should('not.be.visible');
  }

  public verifyIsVisible(selector: Selector): void {
    getCypressElement(selector).should('be.visible');
  }

  public verifyIsNotPresent(selector: Selector): void {
    getCypressElement(selector).should('not.exist');
  }

  public verifyIsPresent(selector: Selector): void {
    getCypressElement(selector).should('exist');
  }

  public verifyTextContent(selector: Selector, expectedContent: string): void {
    getCypressElement(selector).should('have.text', expectedContent);
  }

  public verifyHasClass(selector: Selector, className: string): void {
    getCypressElement(selector).should('have.class', className);
  }

  public verifyDoesNotHaveClass(selector: Selector, className: string): void {
    getCypressElement(selector).should('not.have.class', className);
  }

  public verifyIsInFocus(selector: Selector): void {
    getCypressElement(selector).focused().should('to.have.lengthOf', 1);
  }

  public verifyIsEnabled(selector: Selector, expectedIsEnabled: boolean): void {
    if (expectedIsEnabled) {
      getCypressElement(selector).should('be.enabled');
    } else {
      getCypressElement(selector).should('not.be.enabled');
    }
  }

  public verifyCssProperty(
    selector: Selector,
    propertyKey: string,
    propertyValue: string
  ): void {
    getCypressElement(selector).should('have.css', propertyKey, propertyValue);
  }

  public verifyAttribute(
    selector: Selector,
    attributeKey: string,
    attributeValue: string
  ): void {
    getCypressElement(selector)
      .invoke('attr', attributeKey)
      .should('eq', attributeValue);
  }

  public getIsPresent(selector: Selector): Promise<boolean> {
    return getCypressElement(selector).then((element) => !!element);
  }
}
