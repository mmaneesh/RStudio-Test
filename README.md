# RStudio-Test

Table of Contents
About the Project
Built With
Getting Started
Prerequisites
Installation
Usage
Reports
Contribute
About the Project
Playwright Demo - This project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

Top Features:

Easy to Configure.
Auto-waits for all the relevant checks to pass and only then performs the requested action.
Records videos for Test Cases.
Records the test script and every action on the target page is turned into generated script.
Generates trace file, which gives in-depth details of Test Case execution.
Execution of test case is faster when compared with other competitive framework in market.
Supports Headful/Headless mode execution for Firefox/Webkit/Google Chrome/Chromium/MS Edge on Windows/Linux/Mac machines.
It supports API testing (From Playwright version 1.16 onwards)
It can be used to simulate browser behaviour on mobile devices, and supports over 100+ devices.
It has ability to produce and visually compare screenshots.
To slow down execution slowMo option is available.
Supports 'download' event monitoring, so there is no need for user to actually wait for downloads to finish.
Supports Serial and Parallel execution.
Allure/HTML Reports are generated after execution with an option to capture screenshot/video/trace file on failure.
Support from Microsoft, FREQUENT RELEASES and turn around time for any queries is 48 hours.
Bonus:

Supports PostgresSQL using 'pg' module.
Supports Excel File Read/Write using 'excel-js' module.
Converts HTML Reports to Zip format which can shared across.
Built With
Playwright
Typescript
Prettier
Getting Started
Prerequisites
The following software are required:

nodejs 14 or above: Download and Install Node JS from
https://nodejs.org/en/download/
Install Java 8 or above, Allure Reports require Java 8 or higher.
allure commandline : Install allure command line for generating Allure Reports using
npm i -D @playwright/test allure-playwright
npm i -D allure-commandline
Installation
Clone the repo on your local using below URL
https://msstash.morningstar.com/scm/corpmrkt/corpmrkt-test-automation.git
Navigate to the folder and install npm packages using:
npm install
Usage
For Browser Configuration, change required parameters in playwright.config.ts.

In order to set the global variables for a given corpmrkt environment, run the following command, where <ENV> is any of the required environments: dev, stg, preview, prod, dr

npm run env:config --env=<ENV> 
For execution entire test suite on all available browsers simultaneously execute below command,Test Cases are present in the "tests" folder:
'npm run executeuitests:all'
For executing test cases on individual browsers, then execute the below commands, just make sure the browser name given matches the name given in playwright.config.ts.
'Chrome: executeuitests:chromium'
'Firefox: executeuitests:firefox'
'Safari: executeuitests:safari'
For executing test cases based on tags (@smoke, @regression), provide a suitable tag @Smoke at the start of your test case name, then in package.json:
'Chrome: smoke-tests:chromium'
'Firefox: smoke-tests:firefox'
'Safari: smoke-tests:safari'
For Allure Report generation execute :
'All Browsers: e2e-ui-tests:all'
'Chrome: e2e-ui-tests:chromium'
'Firefox: e2e-ui-tests:firefox'
'Safari: e2e-ui-tests:safari'
For HTML Report generation execute below command , single static HTML report(index.html) which can be sent via email is generated in "html-report" folder:
For converting HTML Reports to zip file "adm-zip" library can be used.
For debugging test cases add debug points, the press CNTRL+SHIFT+P and type "debug:debug npm script", on the edit box select desired script.
Screenshots, Videos and Trace files will be generated in test-results folder.
Reports
Contribute
Lint
Avoid sumbitting lint issues. To check the lint rules on the whole project, run:

npm run lint
To automatically fix simple formatting lining issues, run:

npm run lint:fix
The project has been configured with a PreCommit Hook that will run the lint rule validations before commiting new changes.

Naming conventions
When naming filenames, directories, classes, variables and methods, please make sure that the folloging naming conventions are used:

| Type | Naming conventions | Example | - | - | - | | Filenames | Snake Case | base_page.ts | | Directories | Kebab Case | page-objects/ | | Classes | Pascal Case | BasePage | | Variables | Camel Case | headerTitle | | Methods | Camel Case | getValueFromPage() |
