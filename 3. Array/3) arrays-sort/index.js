function arraysSort(arr) {
  

  /* ПОЧТИ РАБОТАЕТ
  let c = arr.sort(function(a,b) {
    
    if ((a[1]!=null)&&(a[1]!=null)) return a[1] - b[1];
    if ((a[1]==null)&&(a[1]==null)) return a - b;
        
  });


return c;*/

    let n=arr.length;
    let tmp; 
    
    for (let ii = 0;ii<n;ii++) {
      for (let i=0; i<n-1; i++ ) {                
        if (Math.max(...arr[i])>Math.max(...arr[i+1])) {                
                  tmp=arr[i]; arr[i]=arr[i+1]; arr[i+1]=tmp; 
                  }
      }
  }

  let newArr = [];

  for(let i = 0; i<n;i++){
      newArr.push(arr[i]);
  } 
    return newArr;
  };

window.arraysSort = arraysSort;

export default arraysSort;
