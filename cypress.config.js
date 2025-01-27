const { defineConfig } = require("cypress");

let transactionID
let transactionDate
let accountNumber

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "viewportHeight": 768,
  "viewportWidth": 1366,
  "defaultCommandTimeout": 10000,

  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        setId(id){
          transactionID = id
          return null
        },
        getId(){
          return transactionID
        },
        setDate(date){
          transactionDate = date
          return null
        },
        getDate(){
          return transactionDate
        },
        setAccountNumber(number){
          accountNumber = number
          return null
        },
        getAccountNumber(){
          return accountNumber
        }
      })
      return config
    },
  },
});
