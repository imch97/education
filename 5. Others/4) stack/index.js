/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {

  //size = Stack.length;
  size = 0;
  storage = [];
   

  constructor(){   
    
  }

  push(a){
    let size = this.size++;
    this.storage[size] = a;
     return this;
  }

  print(){
    return  "["+String(this.storage)+"]";

  }

  pop(){
    let size = this.size,
        deletedData;
    
 
    if (size>=1) {
        deletedData = this.storage[size];
 
        delete this.storage[size];
        this.size--;
 
        //return deletedData;
    }else {
       throw err("error");}
    return this
  }
  
  
  // size(){
  //   if (this.st === undefined) return 0;
  //   return this.st.length;
  // }
  
  /*isEmpty(){
    if (this.st === undefined) return true;
    return (this.st.length===0||this.st.length===undefined); 
  }*/
  
  isEmpty(){
    
    //return Stack.length===0; 
    return this.size==0;
  }

}



//  s = new Stack();


// console.log("isEmpty ", s.isEmpty());
// console.log("length ",s.size);
// //console.log();
// console.log("push ",s.push(2));
// console.log("print ",s.print());
// console.log("push ",s.push(2,3).pop());
// console.log("print ",s.print()); 
// console.log("pop ",s.pop());
// console.log("print ", s.print()); 
// console.log("push ",s.push(5));
// console.log("push ",s.push(10));
// console.log("print ", s.print()); 

window.Stack = Stack;

export default Stack;
