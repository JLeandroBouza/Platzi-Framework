import LoginPage from "../pages/LoginPage"
import FlightsPage from "../pages/FlightsPage"
import NavBar from "../components/NavBar"

let loginPage
let flightPage
let navbar

describe('Iniciar sesión en la página', () =>{

    beforeAll (async ()=>{
        loginPage = new LoginPage()
        flightPage = new FlightsPage()
        navbar = new NavBar()
    })

    it ('Deberia iniciar sesion en la página', async () =>{

        await loginPage.visit()
        await loginPage.login('user@phptraverls.com', 'demouser')
    },20000)

    it ('Validar que este en el dashboard', async () =>{

        await loginPage.validateLogin()
        

    },20000)

    it ('Navegar hacia la página de vuelos', async () =>{

        await navbar.validateNavBarIsPresent()
        await navbar.selectMenuItem('flights')
             

    },20000)

    it ('Validar que estemos en vuelo y seleccione uno ', async () =>{

        await flightPage.validatePage()
        await flightPage.selectFlight('Mexico','Paris','20-11-2022',5 )
             

    },20000)

    it ('Validar que haya buscado el vuelo ', async () =>{

        await flightPage.validateFlights()       

    },20000)
})