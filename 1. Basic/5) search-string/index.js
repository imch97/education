function searchString(obj) {
  let s;
  let endS="?";
  for(let key in obj){
    s=""
    if ((obj[key]===null)||(obj[key]===undefined)||(obj[key]==="")) continue ;
    s=String(""+s+String(key)+"="+String(obj[key])+"&");
    endS=endS+s;
  }


//toBe('?a=123&b=qwe')
  // for (let key in user) {
  //   // ключи
  //   alert( key );  // name, age, isAdmin
  //   // значения ключей
  //   alert( user[key] ); // John, 30, true
  // }

  //str.substring(0, str.length - 1)
return endS.substring(0,endS.length-1);
}

window.searchString = searchString;

export default searchString;
