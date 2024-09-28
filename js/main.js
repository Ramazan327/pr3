'use strict';

let a  = Number(prompt("Цена"));
let b = Number(prompt("Кол"));

if(a > b) {
    let c = a - b;
    alert("Не хватает" + c);
} else if(b > a) {
    let d  = b - a;
    alert("Сдача" + d);
}else {
    alert("Оплачено");
}


let y  = Number(prompt("Число"));


if(y > 0) {
    alert(1);
} else if(y < 0) {
    alert(-1);
}else {
    alert(0);
}


let m = Number(prompt(""));
let n = Number(prompt(""));

let result = (m + n < 4) ? 'Мало' : 'Много';
alert(result);

let vhod = prompt("");



let message = vhod === 'Сотрудник'  
  ? 'Привет'  
  : vhod === 'Директор'  
    ? 'Здравствуйте' 
    : vhod === ''  
      ? 'Нет логина'  
      : '';
      
alert(message);



let login = prompt("Введите логин:"); 
 
if (login === "Админ") { 
  let password = prompt("Введите пароль:"); 
 
  if (password === "Я главный"){ 
    alert("Здравствуйте!"); 
  }else if (password === null || password === ""){ 
    alert("Отменено"); 
  }else { 
    alert("Неверный пароль"); 
  } 
} else if (login === null ||  login === "") { 
  alert("Отменено"); 
} else { 
  alert("Я вас не знаю"); 
}