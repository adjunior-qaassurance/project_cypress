import userData from '../fixtures/userData.json'


describe('orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passowordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert-content",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    fistNamefield: "[name='firstName']",
    lastNameField:"[name='lastName']",
    genericCamposField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
    

  }

  
  it('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passowordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.fistNamefield).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericCamposField).eq(3).clear().type('Nickname')
    cy.get(selectorsList.genericCamposField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericCamposField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericCamposField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericCamposField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCamposField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorsList.genericCamposField).eq(9).clear().type('ssnNumberTest')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Sucessfully Updated')
    cy.get('.oxd-toast-close')

  })
})