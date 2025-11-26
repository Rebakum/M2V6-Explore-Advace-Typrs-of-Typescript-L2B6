//getter and setter

class BankAccount {
  readonly userId: number;
  public userName: string;
  private userAge: number;
  private _userBalance: number;
  constructor(
    userId: number,
    userName: string,
    userAge: number,
    _userBalance: number
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userAge = userAge;
    this._userBalance = _userBalance;
  }
  //Balance k Set korbo
  //   addBlance(balance: number) {
  //     return this._userBalance = this._userBalance + balance;

  //   }
  // setter use korte chai
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  //get korbo
  //   getBalance() {
  //     return this._userBalance;
  //   }
  //getter use kore get korte chai
  get getBalance() {
    return this._userBalance;
  }
}
const mezbaAccount = new BankAccount(111, "Mezba", 20, 20);
// mezbaAccount.addBlance(100); //  function call korte hossse
// mezbaAccount.addBlance(50);
// console.log(mezbaAccount.getBalance()); // fucntion call korte hosse

// getter setter ar jonno
mezbaAccount.addBalance = 100;
mezbaAccount.addBalance = 60;
// console.log(mezbaAccount);
console.log(mezbaAccount.getBalance);
