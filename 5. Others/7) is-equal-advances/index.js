
/*
function isEqualAdvances(a, b) {
*/
  const isEqualAdvances = (a, b) => {
    
   
    
    if (Object.getOwnPropertyNames(a) !== Object.getOwnPropertyNames(b)) return false;
     if (a === b) {console.log("GO1"); return true; }
     
      //if (keys.length) {console.log("GO1_1"); return false}

    
    //  console.log("name a  ",Object.getOwnPropertyNames(a));
    //  console.log("name b  ",Object.getOwnPropertyNames(b));
    
    
    
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {console.log("GO2"); return a === b; }

    if (a === null || a === undefined || b === null || b === undefined) {console.log("GO3");return false;}
    

    if (a.prototype !== b.prototype) {console.log("GO4"); return false;}

    let keys = Object.keys(a);

    //if ((Object.getOwnPropertyNames(a) !== Object.getOwnPropertyNames(b))||(keys.length !== Object.keys(b).length)) return false;
    
    //console.log("a = ",Object.getOwnPropertyNames(a),"   b = ",Object.getOwnPropertyNames(b),Object.getOwnPropertyNames(a) === Object.getOwnPropertyNames(b));

    if (keys.length !== Object.keys(b).length) {console.log("GO5"); return false;}

    //if (Object.getOwnPropertyNames(a).values !== Object.getOwnPropertyNames(b).values) return false;

    return keys.every(k => isEqualAdvances(a[k], b[k]));
  };

//}

//  isEqualAdvances({ a: undefined }, { b: undefined });




//  console.log("1",isEqualAdvances({ a: undefined }, { b: undefined }));
// console.log("2",isEqualAdvances({ a: undefined }, {}));

// console.log("GO");
// //console.log();



window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
