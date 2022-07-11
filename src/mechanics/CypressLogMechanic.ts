/// <reference types="cypress" />

import { LogMechanic } from '@kryter/barnstorm/lib/mechanics/log/LogMechanic';

export class CypressLogMechanic implements LogMechanic {
  public log(message: string): void {
    cy.log(message);
  }
}
