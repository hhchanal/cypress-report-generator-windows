Given('I open Google page', function () {
	cy.visit('https://www.google.com/')
	cy.wait(2000)
})

Then('I see {string} in the title', function (string) {
	cy.title().should('include', string)
})

When('I search for {string}', function (string) {
	cy.get('input[type="text"]').type(string+'{enter}')
})
