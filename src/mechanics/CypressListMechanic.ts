/// <reference types="cypress" />

import { ListMechanic, ListMechanicOptions } from '@kryter/barnstorm/lib/mechanics/ListMechanic';

export class CypressListMechanic extends ListMechanic {
  constructor(options: ListMechanicOptions) {
    super(options);
  }

  public verifyContentLength(expectedLength: number): void {
    cy.get(this.genericListItemSelector()).should('have.length', expectedLength);
  }

  public verifyItemContent(itemIndex: number, expectedItemContent: string): void {
    cy.get(this.listItemSelector(itemIndex)).should('have.text', expectedItemContent);
  }
}