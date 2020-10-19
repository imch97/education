/*
  Задача написать функцию baseExpect которая будет работать следующим образом
  Пример
  baseExpect(4).toBe(4) === true
  baseExpect(5).toBe(4) === false
  baseExpect(5).toBe.not(4) === true
  baseExpect(5).toBe.not(5) === false
  Примечание: Должно работать только с числами
 */



function baseExpect(a){
  const base = function (a) {

  };

  let toBe = function (b) {
    return a === b;
  }

  let not = function(c) {
    return a !== c;
  }

  base.toBe = toBe;
  base.toBe.not = not;

  return base; 
  
}

window.baseExpect = baseExpect;

export default baseExpect;
