// Encapsulation bahirer donia theke lookano
class BankAccount {
  private readonly userId: number;
  public userName: string;
  private readonly userAge: number;
  private userBalance: number;
  constructor(
    userId: number,
    userName: string,
    userAge: number,
    userBalance: number
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userAge = userAge;
    this.userBalance = userBalance;
  }
  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

const mezbaAccount = new BankAccount(111, "mazba", 29, 20);
mezbaAccount.callHiddenMethod(100);
mezbaAccount.callHiddenMethod(60);
console.log(mezbaAccount);
