arr = [
    3,
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]

console.log(arr[0])

function diagonalDifference(arr) {
    // Write your code here
    let diag1 = 0
    let diag2 = 0
    for(var i = 0, j=arr[0]-1;i<arr[0];i++,j--){
        diag1 += arr[i+1][i]
        diag2 += arr[i+1][j]
        console.log(diag1)
        console.log(diag2)
        console.log(i)
        console.log(j)
}
    let difference = diag1-diag2
    console.log(difference)
    return Math.abs(difference)
}
console.log(diagonalDifference(arr));
