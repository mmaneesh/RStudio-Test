# RStudio-Test
**About the Project** : R-Studio Take Home Test - Created UI/API and Snapshot Tests On The R-Studio Cloud Application



**Built With**

Playwright 

Typescript 

Prettier 

EsLint 



**Prerequisites**

**The following software are required:**

**nodejs 14 or above**: Download and Install Node JS from **https://nodejs.org/en/download/**

**Install Java 8 or above**, Allure Reports require Java 8 or higher.


**Installation**

Clone the repo on your local using below URL
https://github.com/mmaneesh/RStudio-Test.git

Navigate to the folder and install npm packages using: **npm install**

Usage
For Browser Configuration, change required parameters in rstudioui.config.ts.


  
For Executing the UI tests against specific browsers with standard HTML report, run the following commands:

Chrome : **npm run testui:chromium**

Firefox : **npm run testui:firefox**

Safari : **npm run testui:safari**
  
For Executing the API tests, run the following command:
**npm run testapi**

For Executing the snapshot tests, run the following command:
**npm run testsnapshot**
  
For Allure Report execute :
**npm run allureuireport:chromium**


  
For debugging test cases add debug points, the press CNTRL+SHIFT+P and type "debug:debug npm script", on the edit box select desired script.
  
Screenshots, Videos and Trace files will be generated in test-results folder.

To check the lint rules on the whole project, run: **npm run lint** 

To automatically fix simple formatting lining issues, run: **npm run lint:fix**



**Naming conventions**
  
When naming filenames, directories, classes, variables and methods, please make sure that the folloging naming conventions are used:

| Type | Naming conventions |

| Filenames | Snake Case | 

| Directories | Kebab Case |

| Classes | Pascal Case |

| Variables | Camel Case |

| Methods | Camel Case |
