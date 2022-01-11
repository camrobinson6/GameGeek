const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

beforeAll(async () => {
    await driver.get("https://boardgamegeek.com/")
})

afterAll(async() => {
    await driver.quit()
})

describe("Join the GameGeek", ()=>{
   
    it("Click on the Join ", async()=>{
        let joinButton = await driver.findElement(By.xpath('//html/body/gg-app/div/gg-header/header/nav/div/div[1]/div/div[2]/gg-menu-nav-nouser/ul/li[2]/a'))
        await joinButton.click()
        await driver.sleep(5000)
        
        let userName = await driver.findElement(By.xpath('//*[@id="join-username"]'))
        await userName.sendKeys('camrobinson67')
        await driver.sleep(5000)

        let userEmail = await driver.findElement(By.xpath('//*[@id="join-email"]'))
        await userEmail.sendKeys('cameronpaidinfull@gmail.com') 
        await driver.sleep(5000)

        let userPassword = await driver.findElement(By.xpath('//*[@id="join-password"]'))
        await userPassword.sendKeys('password123')
        await driver.sleep(5000)

        let createAccountBtn = await driver.findElement(By.xpath('//*[@id="mainbody"]/div/div/gg-join-container/gg-join/div/div/form/button'))
        await createAccountBtn.click()
        await driver.sleep(5000)

       

    })



})
