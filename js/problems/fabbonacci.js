function fibonacci(n){
    var fib = [1,2,3];
    for (let i = 3; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacci(10)); 




