export class BankAccount {
    balance = 1000;
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayBalance() {
        console.log("Balance:", this.balance);
    }
}
let b = new BankAccount();
b.deposit(500);
b.withdraw(200);
b.displayBalance();
