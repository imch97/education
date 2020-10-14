function basicCalc(operation, a, b) {
  //let choice;
  let asnwer;
  switch(operation){
    case"+":
    asnwer=a+b;
    break;

    case"-":
    asnwer=a-b;
    break;
    
    case"*":
    asnwer=a*b;
    break;

    case"/":
    asnwer=a/b;
    break;
    
    default:break;
  }

  return asnwer;
}

window.basicCalc = basicCalc;

export default basicCalc;
