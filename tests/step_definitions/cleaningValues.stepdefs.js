const assert = require('assert');
const { Given, Then, When } = require('cucumber');
import HiltonMobileAppPage from '../screen-objects/hiltonMobileAppPage';
import MemphisPropertyPage from '../screen-objects/memphisPropertyPage';
import CleaningValuesTab from '../screen-objects/cleaningValuesTab';

//Write all steps in third-person point of view
Given(/^the user opens the Hilton mobile app$/, function () {
	HiltonMobileAppPage.open();
	assert(HiltonMobileAppPage.isLoaded());
});
//Notice that almost all of the logic is the same
//The only difference is that each When statement uses a different property and a 
//different page object! We only need 2 page objects to make sure that our app works as expected
When(/^the user opens the Cleaning Values setting of the Memphis property$/, function () {
	HiltonMobileAppPage.openSettings();
	MemphisPropertyPage.goToCleaningValues();
});
When(/^the user opens the Cleaning Values setting of the New York property$/, function () {
	HiltonMobileAppPage.openSettings();
	NewYorkPropertyPage.goToCleaningValues();
});
Then(/^the page will display the correct room types$/, function () {
	assert(CleaningValuesTab.containsAllRoomTypes());
});