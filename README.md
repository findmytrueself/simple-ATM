/SIMPLE-ATM/ -> CLI: 'yarn start' -> localhost:3000

URI : localhost:3000/

1. card insert(input cardNum -> check in db(/static/dummydata))
2. if there is cardNum in db -> user can input PIN & if PIN correct redirect to /account

URI : localhost:3000/account

3. if correct PIN -> select accounts (all accounts are connected that likes Toss app)
4. if select account user can do transaction deposit and withdraw
