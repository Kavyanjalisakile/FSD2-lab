export
let n = 17;
let prime = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}

if (prime)
    console.log("Prime Number");
else
    console.log("Not a Prime Number");