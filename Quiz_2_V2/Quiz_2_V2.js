const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require("assert");

async function test() {
    //buka browser
    let driver = await new Builder().forBrowser("chrome").build();
    //buka url login
try {
    await driver.get("https://demo.1crmcloud.com/login.php");
    await driver.findElement(By.id("login_user")).sendKeys("admin");
    await driver.findElement(By.id("login_pass")).sendKeys("admin");
    await driver.findElement(By.id("login_button")).click();
    await driver.sleep(3000);
    await driver.findElement(By.className("default-avatar")).click();
    
    const text = await driver.findElement(By.xpath("/html/body/div[7]/div/div[3]/div/form/div[2]/div/div/div[2]/div/div[1]/div[1]/h3")).getText();
    assert.equal(text, "Administrator", "Fail");
    console.log("pass")
    
} catch (error) {
    console.log("Fail")
}


    }


test();