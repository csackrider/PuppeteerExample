const puppeteer = require('puppeteer')
const {goToMemberLogin} = require('./HomePage');
const {doInvalidLogin} = require('./LoginPage');

let config = {
	launchOptions: {
		headless:false
	}
}


puppeteer.launch(config.launchOptions).then(async browser => {
	const page = await browser.newPage();
	await page.goto('https://www.choosehealthy.com/public');
	console.log('Go to member login');
	await goToMemberLogin(page);

	await doInvalidLogin(page, "fakeuser", "fakepwd");


	await browser.close();
})