function factorial(n) {
    let a = 1;
    for (let i = 2; i <= n; i++) {
        a *= i;
    }
    return a;
}

function e(n) {
  let e = 1; 
  let a;
  for (let i = 1; i <= n; i++) {
      a = 1.0 / factorial(i);
      e += a; 
  } 
  return e;
}

//n = 4;
//result = e(n);
//console.log(result);

