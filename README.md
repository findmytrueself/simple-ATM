/SIMPLE-ATM/ -> CLI: 'yarn' -> 'yarn start' -> after server running & check 'http://localhost:3000'

### 프로젝트 회고(Retrorespect)

- 프로젝트에서 요구사항을 모두 만족시켰다.
  - I satisfied with all of requirements in this project
- 커스텀훅을 이용하여 모듈화를 신경을 썼다
  - I focused on making modules with react custom hook
- 상태관리에 신경을 썼다.
  - I focused on maintaining state that managed with redux and redux-persist libraries
- 데이터를 어떻게 할까 고민하다가 더미데이터를 직접 디자인했다.
  - Don't need to call REST API so I made dummydata by myself

---

### localhost:3000/

1. card insert(input cardNum -> check in db(/static/dummydata))
2. if there is correct cardNum in db -> user can input PIN & if PIN is correct ? redirect to /account

### localhost:3000/account

3. if correct PIN -> select accounts (all accounts are connected likes Toss app)
4. if select account, user can deposit and withdraw

---

### components

- APP.jsx
  - Input.jsx
  - Account
    - AccountList.jsx
    - Account.jsx

---

### /hooks

- useAccessCard : call modules of accessCard
- useLogout : call modules of logoutCard
- useDeposit : call modules of depositAccount
- useWithdraw : call modules of withdrawAccount

---

### modules

- all Redux modules in here
  - configureStore(applymiddleware: thunk, reduxdevTools)
  - combineReducer
  - Card
    - action, actionCreator, reducer

## redux-persist

- I apply redux-persist for maintaining log-in state that user can press f5(refresh button) and do not loss login-state
  - persistStore
  - persistConfig
  - persistReducer
