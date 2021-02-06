# TestCafe functional tests

## Structure
- `Pages` - folder contains page-object classes
- `Specs` - folder contains specs

## Running specs/tests

Command to run all tests:
testcafe chrome ./spec

Command to run against specific browser: 
npm run test:chrome
npm run test:chrome:mobile
npm run test:safari
npm run test:firefox

Command to run against a headless chrome browser: 
npm run test:chrome:headless

Command to run individual tests:
testcafe chrome ./spec -f "User can search input box visible on retail site"

Note that 'skip.js errors' is enabled in the .testcaferc.json config file as there are console errors in Safari desktop browser
