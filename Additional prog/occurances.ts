export
let arr = [1, 2, 2, 3, 1, 4];
let count: any = {};

for (let num of arr) {
    if (count[num])
        count[num]++;
    else
        count[num] = 1;
}

console.log(count);