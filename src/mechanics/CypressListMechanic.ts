/// <reference types="cypress" />

import { Selector } from '@kryter/barnstorm/lib/instruments/uiElement/Selector';
import { ListMechanic } from '@kryter/barnstorm/lib/mechanics/list/ListMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressListMechanic implements ListMechanic {
  public verifyListLength(selector: Selector, expectedLength: number): void {
    getCypressElement(selector).should('have.length', expectedLength);
  }
}
