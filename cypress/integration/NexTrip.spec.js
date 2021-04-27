describe('NexTrip', () => {
  it('should land on page successfully', () => {
    cy.visit('/')
    cy.findByText('NextTrip')
    cy.findByText('Real-time Departures')
    cy.findByLabelText('Select Route').should('be.visible')
    .click()
  })
  it('should show directions dropdown', () => {
    cy.findByText('METRO Blue Line').click()
    cy.findByLabelText('Select Direction').should('be.visible')
    .click()
  })
  it('should show stops dropdown', () => {
    cy.url().should('include', '901')
    cy.findByText('Northbound').click()
    cy.findByLabelText('Select Stop').should('be.visible')
    .click()
  })
  it('should show departures table', () => {
      cy.url().should('include', '901/0')
      cy.findByText('Mall of America Station').click()
      cy.url().should('include', '901/0/MAAM')
      cy.findByTestId('departures-table').should('be.visible')
  })
})