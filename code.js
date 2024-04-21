function factorial(n) {
    let a = 1;
    for (let i = 2; i <= n; i++) {
        a *= i;
    }
    return a;
}

function e(n) {
    if(n === 0) {
        return 1;
    } 

    else {
        return 1.0 / factorial(n) + e(n - 1);
    } 
}

//n = 4;
//result = e(n);
//console.log(result);

