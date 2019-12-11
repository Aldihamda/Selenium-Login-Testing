const { Builder, By, Key, util } = require("selenium-webdriver");

async function test() {
  //buka browser
  let driver = await new Builder().forBrowser("chrome").build();
  // buka url google
  await driver.get("http://google.co.id/");
//   await driver.findElement(By.linkText("3. Add a User")).click();
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}

test();
