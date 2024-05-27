import LoginPage from "../pages/LoginPage"

let loginPage

describe('Iniciar sesión en la página', () =>{

    beforeAll (async ()=>{
        loginPage = new LoginPage()
    })

    it ('Deberia de ir a la página', async () =>{

        await loginPage.visit()
    })

    it ('Debera llenar los campos', async () =>{

        await loginPage.login('user@phptraverls.com', 'demouser')

    },20000)

    it ('Debera llenar los campos', async () =>{

        await loginPage.login('user@phptraverls.com', 'demouser')

    },20000)
})