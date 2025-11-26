class BankAccount {
  private readonly userId: number;
  public userName: string;
  private readonly userAge: number;
  protected userBalance: number;
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
  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}
class StudentBankAccount extends BankAccount {
  text() {
    this.userBalance;
  }
}

const mezbaAccount = new BankAccount(111, "mazba", 29, 20);
mezbaAccount.addBalance(100);
mezbaAccount.addBalance(100);
console.log(mezbaAccount);
