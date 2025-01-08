class MainPage {
    constructor(){
        this.mainMenu = '.main-menu';
    }

    verifyMainMenu(visible){
        if (visible) {
            cy.get(this.mainMenu)
        }
        else {
            cy.get(this.mainMenu).should('not.be.visible')
        }
    }
}

export default MainPage;