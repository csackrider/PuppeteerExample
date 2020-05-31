const { expect } = require('chai');

const loginPage = {
	username: 'input#username',
	password: 'input[id="password"]', 
	login: 'button[type="submit"]',
	loginErrorMessage: 'div[class = "validation_message ember-view"]'
}

async function doInvalidLogin(page, uname, pwd) {
	await page.waitFor(loginPage.username);
	await page.type(loginPage.username, uname);
 	await page.type(loginPage.password, pwd);
 	await page.click(loginPage.login);
 	await page.waitFor(loginPage.loginErrorMessage);
 	const loginErrMsg = await page.$eval(loginPage.loginErrorMessage, el => el.textContent.trim())
 	const errMessages = await page.$x("//div[text()='This username / password combination is not valid.']");

	expect(errMessages.length).to.equal(1);

}
module.exports = { doInvalidLogin }