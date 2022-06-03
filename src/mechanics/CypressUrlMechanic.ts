/// <reference types="cypress" />

import { UrlMechanic } from '@kryter/barnstorm/lib/mechanics/url/UrlMechanic';

export class CypressUrlMechanic implements UrlMechanic {
  public visit(url: string): void {
    cy.visit(url);
  }

  public verifyUrl(expectedUrl: string | RegExp): void {
    if (typeof expectedUrl === 'string') {
      cy.url().should('eq', expectedUrl);
    } else {
      cy.url().should('match', expectedUrl);
    }
  }

  public getUrl(): Promise<string> {
    const urlPromise = new Promise<string>((resolve) => {
      cy.url().then((url) => resolve(url));
    });
    return urlPromise;
  }
}
