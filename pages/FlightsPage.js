import BasePage from "./BasePage";


export default class FlightsPage extends BasePage {

    constructor(){
        super()
        this.mainDiv = '.main_search'
        this.inputs = {
            from: '#autocomplete',
            to: '#autocomplete2',
            date: '#departure',
            passengers: '.dropdown-toggle.dropdown-btn.waves-effect',
            search: '#flights-search',
            firstOption: '.autocomplete-result[data-index="0"]',
            moreAdultsPassengers: "(//i[@class='la la-plus'])[1]",

        }
    }

    async validatePage(){
        
        await page.waitForSelector(this.mainDiv)
        await page.waitForSelector(this.inputs.from)
        await page.waitForSelector(this.inputs.to)
        await page.waitForSelector(this.inputs.date)
        await page.waitForSelector(this.inputs.passengers)
        await page.waitForSelector(this.inputs.firstOption)
        await page.waitForSelector(this.inputs.moreAdultsPassengers)
        await page.waitForSelector(this.inputs.search)
    }

    async selectFlight(from,to,date,passengers) {

        await this.type(this.inputs.from, from)
        await this.click(this.inputs.firstOption)

        await this.type(this.inputs.to, to)
        await this.click(this.inputs.firstOption)

        await this.type(this.inputs.date, date)

        if ( passengers !==1){
            await this.click(this.inputs.passengers)
            for(let i=0; i< passengers -1 ; i++){
                await this.click(this.inputs.moreAdultsPassengers)
            }
        }

        await this.click ( this.inputs.search)
    }

    async validateFlights() {
        await this.wait(5)
    }
}