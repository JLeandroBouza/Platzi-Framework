export default class BasePage{

    async getTitle(){
        return await page.title()
    }

    async getUrl(){
        return await page.url()

    }

    async getText(selector){

        try{
            await page.waitForSelector(selector)
            return await page.$eval(selector,(el)=>el.textContent)
        }catch (e){
            throw new Error(`Error al obtener el texto del Selector ${selector}`)
        }    
    }

    async getAttribute(selector,attribute){

        try{
            await page.waitForSelector(selector)
            return await page.$eval(selector,(el)=>el.getAttribute(attribute))
        }catch (e){
            throw new Error(`Error al obtener el atributo del Selector ${selector}`)
        }    
    }

    async getValue(selector){

        try{
            await page.waitForSelector(selector)
            return await page.$eval(selector,(el)=>el.value)
        }catch (e){
            throw new Error(`Error al obtener el valor del Selector ${selector}`)
        }    
    }

    async getCount(selector){

        try{
            await page.waitForSelector(selector)
            return await page.$$eval(selector,(el)=>el.length)
        }catch (e){
            throw new Error(`Error al obtener el numero de elementos del Selector ${selector}`)
        }    
    }

    async getClick(selector){

        try{
            await page.waitForSelector(selector)
            await page.click(selector)
        }catch (e){
            try{
                const element=  page.waitForXPath(selector)
                element.click()           
            } catch(e){
                throw new Error(`Error al dar click en el Selector ${selector}`)
            }
            throw new Error(`Error al dar click en el Selector ${selector}`)   
        }
    }

    async type(selector,text,opts={}){

        try{
            await page.waitForSelector(selector)
            await page.type(selector,text,opts)
        }catch (e){
            throw new Error(`Error al escribir el texto en el Selector ${selector}`)
        }    
    }

    async type(selector){

        try{
            await page.waitForSelector(selector)
            await page.click(selector, { clickCount: 2} )
        }catch (e){
            throw new Error(`Error al hacer doble click en el Selector ${selector}`)
        }    
    }

    async wait(time){

        return page.waitForTimeout(time)
   
    }

    
}