
/*Chyld sample coding

/*var name =prompt('what is your name?');
var balance = prompt('what is your balance?');
balance = parseFloat(balance);

var dep1 = prompt('deposite 1?');
var dep2 = prompt('deposite 2?');
var dep3 = prompt('deposite 3?');
var with1 = prompt('withraw 1?');
var with2 = prompt('withraw 2?');
var with3 = prompt('withraw 3?');

dep1 =parseFloat(dep1);
dep2 =parseFloat(dep2);
dep3 =parseFloat(dep3);
with1 = parseFloat(with1);
with2 = parseFloat(with2);
with3 = parseFloat(with3);

var deposite = 0;
deposite += dep1;
deposite += dep2;
deposite += dep3;

car withraw = 0;
withraw += with1;
withraw += with2;
withraw += with3;

balance += (deposite - withraw);
balance -= (balance <0) ? 50 : 0;
console.log('your balance is :' + balance);

*/



var first_name = prompt('what is you name?');
var last_name = prompt('what is your lastname?');

var initial_balance = prompt('how much is you initial balance?');
initial_balance = parseFloat(initial_balance);

var deposite_first = prompt('first deposite amount?');
  deposite_first = parseFloat(deposite_first);

var deposite_second = prompt('second deposite amount?');
  deposite_second = parseFloat(deposite_second);

var deposite_third = prompt(' third deposite amount?');
  deposite_third = parseFloat(deposite_third);

  initial_balance += deposite_first;
  initial_balance += deposite_second;
  initial_balance += deposite_third;

var sub_first = prompt('first sub amount?');
  sub_first = parseFloat(sub_first);

var sub_second = prompt('second sub amount?');
  sub_second = parseFloat(sub_second);

var sub_third = prompt(' third sub amount?');
  sub_third = parseFloat(sub_third);


var sub = initial_balance
  sub = sub - sub_first;
  sub = sub - sub_second;
  sub = sub - sub_third;
if (sub >= 0 )
  {
  console.log (first_name + " " + last_name);
  console.log('your balance is : ' + sub);
  }
else if (sub < 0)
{
  sub = sub - 50;
console.log('you charged 50$ for overdraft. your current balance is :' + sub);
}


