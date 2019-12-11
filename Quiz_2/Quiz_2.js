const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require("assert");

async function test() {
    //buka browser
    let driver = await new Builder().forBrowser("chrome").build();
    //buka url login
try {
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.id("btnLogin")).click();

    const text = await driver.findElement(By.xpath("//li")).getText();
    assert.equal(text, "Welcome Admin");
    console.log("pass")
    
} catch (error) {
    console.log("Fail")
}


    }


test();