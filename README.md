/SIMPLE-ATM/ -> CLI: 'yarn start' -> localhost:3000

### URI : localhost:3000/

1. card insert(input cardNum -> check in db(/static/dummydata))
2. if there is correct cardNum in db -> user can input PIN & if PIN correct redirect to /account

### URI : localhost:3000/account

3. if correct PIN -> select accounts (all accounts are connected likes Toss app)
4. if select account, user can deposit and withdraw

---

### components

- Account
  - AccountList
  - Account
- Input

---

### /hooks

- useAccessCard : call modules of accessCard
- useLogout : call modules of logoutCard
- useDeposit : call modules of depositAccount
- useWithdraw : call modules of withdrawAccount

---

### modules

redux modules in here

- configureStore(applymiddleware: thunk, reduxdevTools)
- Card
  - action, actionCreator, reducer

I apply redux-persist for maintaining state
