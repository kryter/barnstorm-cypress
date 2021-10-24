import { Mechanics } from "@kryter/barnstorm/lib/flying/Mechanics";
import { CypressButtonMechanic } from "./mechanics/CypressButtonMechanic";
import { CypressCheckboxMechanic } from "./mechanics/CypressCheckboxMechanic";
import { CypressElementMechanic } from "./mechanics/CypressElementMechanic";
import { CypressListMechanic } from "./mechanics/CypressListMechanic";
import { CypressKeyboardMechanic } from "./mechanics/CypressKeyboardMechanic";
import { CypressTextAreaMechanic } from "./mechanics/CypressTextAreaMechanic";
import { CypressTextBoxMechanic } from "./mechanics/CypressTextBoxMechanic";
import { CypressUrlMechanic } from "./mechanics/CypressUrlMechanic";

let isRegistered: boolean = false;

export function register(): void {
  if (isRegistered) {
    return;
  }

  Mechanics.Button = new CypressButtonMechanic();
  Mechanics.Checkbox = new CypressCheckboxMechanic();
  Mechanics.Element = new CypressElementMechanic();
  Mechanics.Keyboard = new CypressKeyboardMechanic();
  Mechanics.List = new CypressListMechanic();
  Mechanics.TextArea = new CypressTextAreaMechanic();
  Mechanics.TextBox = new CypressTextBoxMechanic();
  Mechanics.Url = new CypressUrlMechanic();

  isRegistered = true;
}
