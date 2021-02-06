import { Selector } from "testcafe";

export class RetailSiteHomePage {
	public HomePageTitle = Selector('[title="Bunnings Warehouse"]');
	public SearchInputBox = Selector('input[datav3-track-text="search"]');
	public SearchButton = Selector('button[datav3-track-text="search"]');
}