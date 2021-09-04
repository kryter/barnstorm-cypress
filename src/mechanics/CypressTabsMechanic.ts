/// <reference types="cypress" />

import { TabsMechanic, TabsMechanicOptions } from '@kryter/barnstorm/lib/mechanics/TabsMechanic';

export class CypressTabsMechanic extends TabsMechanic {
  constructor(options: TabsMechanicOptions) {
    super(options);
  }

  public clickTab(tabId: string): void {
    cy.get(this.options.tabsSelector).find(this.options.relativeTabSelector).click();
  }

  public verifyTabSelectionState(tabId: string, expectedIsSelected: boolean): void {
    if (expectedIsSelected) {
      // TODO
    } else {
      // TODO
    }
  }
}