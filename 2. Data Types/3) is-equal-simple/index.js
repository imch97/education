function isEqual(a, b) {

  let s;
  let endS1="";
  let endS2="";

  if (a==null||b==null) return false;

  for(let key in a){
    s=""
    s=String(""+s+String(key)+"="+String(a[key])+"&");
    endS1=endS1+s;
  }
  endS1=endS1.substring(0,endS1.length-1)


  for(let key in b){
    s="" 
    s=String(""+s+String(key)+"="+String(b[key])+"&");
    endS2=endS2+s;
  }
  endS2=endS2.substring(0,endS2.length-1)
  
  return endS1===endS2;


}

window.isEqual = isEqual;

export default isEqual;
