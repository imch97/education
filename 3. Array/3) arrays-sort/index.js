function arraysSort(arr) {
  
  //Math.max(...args)
  // let  max;

  //  for(let i=0;i<(arr.lenght);i++){
  //     max=Math.max(...arr[i]);
      
  //  } 
  // return c;

  let c = arr.sort(function(a,b) {
    
    if ((a[1]!=null)&&(a[1]!=null)) return a[1] - b[1];
    if ((a[1]==null)&&(a[1]==null)) return a - b;
    
    //return a - b;
    //return a[1] - b[1];
    //return a[Math.max(1)] - b[Math.max(1)];

  });


return c;
};

window.arraysSort = arraysSort;

export default arraysSort;
