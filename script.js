//--------------------------------------------------------------Циклы while и for----------------------------------------------------------


/* let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let result = a + b < 4 ? alert('Мало') : alert('Много'); */

/* for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  } */

/* let i = 0;
while (i < 3){
    alert( `number ${i}!` )
    i++;
} */


/* Задание 1: 
Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов. */

//Решение 1:
/* let i;
let n = +prompt('Введите любое целое число');
alert('В диапазоне от 2 ' + ' ' + 'до' + ' ' + n + ' следующие числа являются простыми: ');
next:
for (i = 2; i <= n; i++) { //Перебираем все числа в диапазоне от 2 до n.
    for (let j = 2; j < i; j++) { //Перебираем все числа до каждого i-го.
        if (i % j == 0) continue next; //Проверяем делится ли каждый i элемент на любой j элемент. Если делится без остатка - это не простое число и мы его пропускаем
    }
    alert(i);
} // Выводим в консоль простые числа */


//--------------------------------------------------------------Функции------------------------------------------------------------------

/* Задание 4:
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
 */


// Решение 4:
/* let x = +prompt('Введите число х');
let n = +prompt('Введите степень n');

if (n < 1) {
    n = +prompt('Ошибка. Вы ввели отрицательное число. Введите положительное число');
} else if (!Number.isInteger(n)) {
    n = +prompt('Ошибка. Вы ввели дробное число. Введите целое число');
}

function pow(x, n) {
    return alert(x ** n);
}
pow(x, n); */