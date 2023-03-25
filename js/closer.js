//normal closure
function test (){
    let a = 100
    return function inner(){
        return a;
    }
}


let inner = test()
console.log(test());


// closure value check
function test (){
    let a = 100;
    let fun = function inner(){
        a = 500
        return a;
    }
    a = 200;
    return fun;
}
let inner = test()
console.log(inner());