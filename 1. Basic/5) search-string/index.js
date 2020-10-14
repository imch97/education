function searchString(obj) {
  let s;
  let endS="?";
  for(let key in obj){
    s=""
    if ((obj[key]===null)||(obj[key]===undefined)||(obj[key]==="")) continue ;
    s=String(""+s+String(key)+"="+String(obj[key])+"&");
    endS=endS+s;
  }

return endS.substring(0,endS.length-1);
}

window.searchString = searchString;

export default searchString;
