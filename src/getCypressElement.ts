/// <reference types="cypress" />

import { Selector } from '@kryter/barnstorm/lib/instruments/uiElement/Selector';

/**
 * Get the cypress chainable command for the main body
 * of the app or an iFrame within the app.
 */
export function getCypressElement(
  selector: Selector
): Cypress.Chainable<JQuery<HTMLElement>> {
  const options = selector.timeoutInMs
    ? {
        timeout: selector.timeoutInMs,
      }
    : undefined;

  if (selector.iFrame) {
    const cypressElement = cy
      .get(selector.iFrame, options)
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its('0.contentDocument')
      .should('exist')
      // automatically retries until body is loaded
      .its('body')
      .should('not.be.undefined')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap);
    if (selector.content) {
      return cypressElement.contains(selector.css, selector.content, options);
    }
    return cypressElement.find(selector.css, options);
  }

  if (selector.content) {
    return cy.contains(selector.css, selector.content, options);
  }

  return cy.get(selector.css, options);
}
