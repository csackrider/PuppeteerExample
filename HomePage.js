
const homePage = {
	memberLoginButton: 'div[class="slider-home-intro"]>button[class="btn-login member-button"]'
}

async function goToMemberLogin(page) {
	await page.waitFor(homePage.memberLoginButton);
 	await page.click(homePage.memberLoginButton);
 	await page.waitFor('#username');
 	//to assertion that you are on the member login page here?
}
module.exports = { goToMemberLogin }