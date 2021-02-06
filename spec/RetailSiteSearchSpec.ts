import { Selector } from 'testcafe'
import { RetailSiteHomePage } from '../pages/RetailSiteHomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

const retailSiteHomePage = new RetailSiteHomePage();
const searchResultsPage = new SearchResultsPage();

fixture `User can search input box visible on retail site`
  .page('https://www.bunnings.com.au/')

test ('User lands on the Bunnings retail homepage', async t => {
  await t
  .expect(retailSiteHomePage.HomePageTitle.visible).ok()
});

test ('User can input text in the search box and clicks search', async t => {
  await t
  .expect(retailSiteHomePage.SearchInputBox.visible).ok()
  .click(retailSiteHomePage.SearchInputBox)
  .typeText(retailSiteHomePage.SearchInputBox, 'kitchen sink')
  .expect(retailSiteHomePage.SearchButton.visible).ok()
  .click(retailSiteHomePage.SearchButton)
});

test('User is redirected to Search results page', async t => {
	await t
    .expect(searchResultsPage.searchResultsInputBox.visible).ok()
});