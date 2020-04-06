//--------------------------------------------------------OBJECTS-----------------------------------------------------------------
/* let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30,        // под ключом "age" хранится значение 30
};
user.isAdmin = true;
alert(user.isAdmin); */






// ЗАДАНИЕ 1: Напишите код, выполнив задание из каждого пункта отдельной строкой:

/* Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name; */



/* ЗАДАНИЕ 2:
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так: */
/* let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false
 */

//РЕШЕНИЕ 2:
/* let schedule = {};
schedule["8:30"] = "get up";

function isEmpty(schedule) {
    for (let key in schedule) {
         // если тело цикла начнет выполняться - значит в объекте есть свойства
        return alert (false);
    }
    return alert (true);
}

isEmpty(schedule); */


//ЗАДАНИЕ 3:
/* У нас есть объект, в котором хранятся зарплаты нашей команды.
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0. */

//РЕШЕНИЕ 3:

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
alert(sum); */


//ЗАДАНИЕ 4:
/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое. */


//РЕШЕНИЕ 4:
/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {

    for (let key in menu) {

        if (typeof menu[key] == "number") {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
//проверяем, например, width
alert(menu.width); */


//--------------------------------------------------------Методы объекта-----------------------------------------------------------------
/* let user = {
    name: "Джон",
    age: 30,
    sayHi() {
        alert("Привет!");
    }
};

user.sayHi(); // Привет! */


/* let user = {
    name: "Джон",
    age: 30,

    sayHi() {
      // this - это "текущий объект"
      alert("Привет, " + this.name);
    }

  };

  user.sayHi(); // Джон */




/*  Задание 1: 
Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. */

//Решение 1:

/* let calculator = {
    //a: null,
    //b: null,

    read() {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */



/* Задание 2
Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
//Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1 */


//Решение 2: (должны у методов добавить return: this, т.к. в вызове ladder.up().up() перед вторым up значение indefined, из-за того, что сама функция ничего не возвращает)
/* let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
    return this;
  }
};

ladder.up().up().down().showStep(); */



//--------------------------------------------------------Преобразование объектов в примитивы---------------------------------------------------

/* let obj = {
  number: 777,
}

alert(String(obj)); // Object Object - это стандартный вывод, т.к. не прописан метод "toString" у объекта. 
obj.toString = function(){return this.number + 3 };
alert(String(obj)); // 780

alert(Number(obj)); // 780 - если не прописан метод valueOf, выводит то же самое значение toString, а если нет toString метода - выводит NaN 
obj.valueOf = function(){ return this.number - 7; }
alert(Number(obj)); // 770
 */

//--------------------------------------------------------Конструкторы, создание объектов через new-------------------------------------------


/* function User(name){
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Petr");
alert(user.name) */



/* Задание 1:
Создание калькулятора при помощи конструктора
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */



// Решение 1:
/* function Calculator(){
  this.read = function(){
    this.a = +prompt("Введите число a");
    this.b = +prompt("Введите число b");
  };
  this.sum = function(){
    return this.a + this.b;
  };
  this.mul = function(){
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() ); */



//Задание 2:
/* Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */


//Решение 2:
/* function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    return this.value += +prompt('Введите число');
  }
};
let accumulator = new Accumulator(10);
console.log(accumulator.read());
console.log(accumulator.read());
alert(accumulator.value); */


//--------------------------------------------------------Методы у примитивов--------------------------------------------------------

/* Задание 2
Почему 6.35.toFixed(1) == 6.3?
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3
Как правильно округлить 6.35? */

// Решение 2
/* alert( 6.35.toFixed(20) ); //6.34999999999999964473
alert( (6.35 * 10).toFixed(20) ); //63.50000000000000000000
alert( Math.round(6.35 * 10)/10 ); //6.4 */

