import LoginPage from '../support/PageObjects/loginPage.js';
import MainPage from '../support/PageObjects/mainPage.js';

const loginPage = new LoginPage();
const mainPage = new MainPage()

describe('Onboarding task', () => {
  beforeEach(() => {
    loginPage.open(); // Open the login page before each test
  });
  
  it('User1 should be able to login', () => {
    loginPage.enterUsername(Cypress.env('users').user1.username);
    loginPage.enterPassword(Cypress.env('users').user1.password)
    loginPage.clickSignIn()
    mainPage.verifyMainMenu(Cypress.env('users').user1.isValidUser)
  });

  it('User2 should be able to login', () => {
    loginPage.enterUsername(Cypress.env('users').user2.username);
    loginPage.enterPassword(Cypress.env('users').user2.password)
    loginPage.clickSignIn()
    mainPage.verifyMainMenu(Cypress.env('users').user2.isValidUser)
  });

  it('User with incorrect credentials should not be able to login', () => {
    loginPage.enterUsername(Cypress.env('users').user3.username);
    loginPage.enterPassword(Cypress.env('users').user3.password)
    loginPage.clickSignIn()
    mainPage.verifyMainMenu(Cypress.env('users').user3.isValidUser)
  });
})