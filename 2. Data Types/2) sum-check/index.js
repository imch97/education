function sumCheck(a, b) {
  let er= "Wrong arguments type!";
  let isValidA = typeof a === 'number';
  let isValidB = typeof b === 'number';


   if(isValidA && isValidB){
      return a+b;
    }
  throw er;

}

window.sumCheck = sumCheck;

export default sumCheck;
