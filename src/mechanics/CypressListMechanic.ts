/// <reference types="cypress" />

import { ListMechanic } from '@kryter/barnstorm/lib/mechanics/list/ListMechanic';
import { getCypressElement } from '../getCypressElement';

export class CypressListMechanic implements ListMechanic {
  public verifyListLength(
    selector: string,
    expectedLength: number,
    iFrameSelector?: string
  ): void {
    getCypressElement(selector, iFrameSelector).should(
      'have.length',
      expectedLength
    );
  }
}
