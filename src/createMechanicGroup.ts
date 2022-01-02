import MechanicGroup from '@kryter/barnstorm/lib/MechanicGroup';
import { CypressButtonMechanic } from './mechanics/CypressButtonMechanic';
import { CypressCheckboxMechanic } from './mechanics/CypressCheckboxMechanic';
import { CypressElementMechanic } from './mechanics/CypressElementMechanic';
import { CypressListMechanic } from './mechanics/CypressListMechanic';
import { CypressKeyboardMechanic } from './mechanics/CypressKeyboardMechanic';
import { CypressTextAreaMechanic } from './mechanics/CypressTextAreaMechanic';
import { CypressTextBoxMechanic } from './mechanics/CypressTextBoxMechanic';
import { CypressUrlMechanic } from './mechanics/CypressUrlMechanic';

export function createMechanicGroup(): MechanicGroup {
  return {
    button: new CypressButtonMechanic(),
    checkbox: new CypressCheckboxMechanic(),
    element: new CypressElementMechanic(),
    keyboard: new CypressKeyboardMechanic(),
    list: new CypressListMechanic(),
    textArea: new CypressTextAreaMechanic(),
    textBox: new CypressTextBoxMechanic(),
    url: new CypressUrlMechanic(),
  };
}
