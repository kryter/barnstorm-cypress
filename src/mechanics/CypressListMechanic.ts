/// <reference types="cypress" />

import { ListMechanic } from '@kryter/barnstorm/lib/mechanics/ListMechanic';

export class CypressListMechanic implements ListMechanic {
  public verifyListLength(selector: string, expectedLength: number): void {
    cy.get(selector).should('have.length', expectedLength);
  }
}
