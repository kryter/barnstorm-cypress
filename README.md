# Barnstorm Cypress

`barnstorm-cypress` provides an implementation of Barnstorm `mechanics` for the Cypress test framework (<https://www.cypress.io/>).

## Getting Started

To use the Barnstorm Cypress mechanics in your end to end tests, create a `mechanic group` and pass it to your Barnstorm `instrument set`:

```typescript
import { InstrumentSet } from "@kryter/barnstorm/lib/InstrumentSet";
import { createMechanicGroup } from "@kryter/barnstorm-cypress/lib/createMechanicGroup";

const mechanicGroup = createMechanicGroup();

export function buildInstrumentSet(): InstrumentSet {
  return new InstrumentSet(mechanicGroup);
}
```

## Learn More About Barnstorm

For more information on how to use Barnstorm, see the Barnstorm core project (<https://github.com/kryter/barnstorm>).
