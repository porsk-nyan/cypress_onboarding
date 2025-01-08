class LoginPage {
    constructor(){
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.submitButton = '#log-in';
    }

    open(){
        cy.visit('https://demo.applitools.com/')
    }

    enterUsername(username){
        cy.get(this.usernameInput).type(username)
    }
    
    enterPassword(password){
        cy.get(this.passwordInput).type(password)
    }

    clickSignIn(){
        cy.get(this.submitButton).click()
    }
}

export default LoginPage;