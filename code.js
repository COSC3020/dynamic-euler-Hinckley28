
function e(n) {
  let e = 1; 
  factorial = 1;
  let a;
  for (let i = 1; i <= n; i++) { 
      factorial *= i;
      a = 1.0 / factorial;
      e += a; 
  } 
  return e;
}

//n = 4;
//result = e(n);
//console.log(result);

