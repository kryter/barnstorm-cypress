# Barnstorm Cypress

`barnstorm-cypress` provides an implementation of mechanics using the Cypress framework.  If you decide to switch to a different test framework, you can swap out this implementation for another barnstorm test framework implementation and you will have minimal changes (if any) to the rest of your test code.

This makes it possible to transition to a different test framework even if you have hundreds of tests and it would not be feasible to change every test.

In your tests, call `register()` to use the `barnstorm-cypress` mechanics with `barnstorm`.
