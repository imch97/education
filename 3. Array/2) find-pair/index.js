function findPair(arr) {
  
  let count=0;
  let l =arr.length;


  for(let i = 0 ; i < (l-1); i++){

      for(let j = i + 1;j < l ; j++){
        
        if (arr[i] === arr[j]) {
          count++;
          return arr[i];          
        }
        
      }

  }
  if (count==0) return null;
};

window.findPair = findPair;

export default findPair;
