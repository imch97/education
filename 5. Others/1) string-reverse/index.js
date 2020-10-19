/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */
function perevorot(str){
  if ( ! str ) { str = this; }
  let nstr = "";
  console.log(str);
  console.log(str.length);
    for (let i = str.length - 1; i >= 0; i--) {
        nstr += str[i];
    }
    console.log("before: "+str+" after: " + nstr);
    return nstr;
}

String.prototype.reverse = perevorot;