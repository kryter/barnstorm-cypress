export class CypressKeyboardMechanic {
  public pressEnter(): void {
    cy.get('body').type('{enter}');
  }
}
