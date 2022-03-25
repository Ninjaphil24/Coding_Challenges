a = [1, 2, 3]
b = [3, 2, 1]

function compareTriplets(a, b) {
    // Write your code here
let Alice = 0;
let Bob = 0;
let result = []
for(let i = 0; i<3;i++){
    if(a[i] > b[i])Alice++
    if(a[i] < b[i])Bob++
}
result.push(Alice,Bob)
return result
}

console.log(compareTriplets(a,b));