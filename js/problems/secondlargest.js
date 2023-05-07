function largest(arr) {

    let max = arr[0]
    let secmax = arr[1]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secmax = max
            max = arr[i]
        }
        else if (arr[i] > secmax && arr[i] !== max) {
            secmax = arr[i]
        }
    }
    console.log(max);
    console.log(secmax);
}


largest([2, 1, 5, 4, 7])