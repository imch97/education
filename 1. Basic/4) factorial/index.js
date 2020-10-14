function factorial(n) {
  let f=1;
for(let i=1;i<=n;i++){
  f=f*i;
}

return f;
}

window.factorial = factorial;

export default factorial;
