The automation project uses the URL website:
https://parabank.parasoft.com/parabank/index.htm

Automated testing using Cypress v13.15.2


The project covers test cases for the banking services proposed by the website. It also includes some test cases that check the directions of links and logos on the website.

This website does not store accounts created for big period of time. it is possible to recreate the same account every 24 hours. After each it block executed, there is a link to a blank page, making it ineffective to group test cases where it is mandatory to be logged in. 

So, several test cases are in separate files. Due to the volatility of the duration of a registered account, the guarantee of test execution occurs by creating an account exactly before carrying out the proposed test case.

Before executing a new test case that requires account creation, simply change the userName value before executing, thus a new account will be created successfully.

TC1 checks the mandatory fields in the account creation form

TC2 successfully creates an account

TC3 checks the mandatory "Custom Care" form fields

TC4 Custom Care form fielded completed and sent successfully

TC5 checks mandatory fields of "forgot login" form

TC6 fill out "forgot login" form with unregistered data

TC7 case of success in fill out the "forgot login" form. An account is created before to execute this case.

TC8 checks mandatory login form  fields

TC9 performs a login with data that does not represent an active account

TC10 performs a successful login. It is created an account just before to test it, just to guarantee the the account will be active

TC11 tests logout functionality


TC12, TC13, TC14, TC15, TC16, TC17, TC18, TC19 are tests to check the direction suggested by links and icons

TC12 tests the routing of the "about us" link in the header panel

TC13 tests "About us" icon targeting

TC14 tests routing of the "Services" link in the header panel

TC15 tests directing of "admin page" link from header panel

TC16 tests "site map" link in the footer panel

TC17 return to home page by parabank icon

TC18 return to "home page" by icon home

TC19 return to "home page" by link home in footer panel

TC20 verify account number mismatch and account number verification in bill pay form

TC21 check error messages for fields "account", "verify account" and "amount" with values ​​that are not numbers

TC22 verify mandatory fields of the "bill pay" form

TC23 form bill pay sent successfully

For TC24, TC25, TC26 and TC27 scenarios, it is execute a transfer of funds and teh data are registered in variables to be checked by each function tested

TC24 find transaction by amount

TC25 find transaction by date

TC26 find transaction by date range.

TC27 find transaction by id. there is a bug in the backend code. even manually the fucntion fails. no matter the value filled, the return will be always about an internal error

TC28 check open account  of type "checking"

TC29 check open account of type "savings"

TC30 check the "overview account" functionallity

TC31 execute loan that is approved

TC32 execute loan that is denied

TC33 test  "transfer fund" functionallity

TC34 verfify mandatory fields for update info

TC35 update info success













