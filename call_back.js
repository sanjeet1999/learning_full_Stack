function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}


function findSum(a,b,fn){
    let num1 = fn(a)
    let num2 = fn(b)
    return num1+num2
}


let b = findSum(3,4,square)
console.log(b)