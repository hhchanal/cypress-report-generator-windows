// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from 'mochawesome/addContext'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

afterEach( function () {
  cy.wait(3000)
  cy.addScreenShot({ capture: 'fullPage' })
})

Cypress.Commands.add("addScreenShot", function (option) {
  const currentDate = new Date();
  const filename = currentDate.getTime().toString()
  cy.screenshot(currentDate.getTime().toString(), option)
  cy.once("test:after:run", (test, runnable) => {
    const imageUrl = `screenshots/${
      Cypress.spec.name
    }/${filename}.png`
    addContext({ test }, imageUrl)
  })
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
