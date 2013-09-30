
var first_name = prompt('what is you name?');
var last_name = prompt('what is your lastname?');

var initial_balance = prompt('how much is you initial balance?');

var deposite_first = prompt('first deposite amount?');
  deposite_first = parseFloat(deposite_first);

var deposite_second = prompt('second deposite amount?');
  deposite_second = parseFloat(deposite_second);

var deposite_third = prompt(' third deposite amount?');
  deposite_third = parseFloat(deposite_third);

var sum = 0
  sum += deposite_first;
  sum += deposite_second;
  sum += deposite_third;

var sub_first = prompt('first sub amount?');
  sub_first = parseFloat(sub_first);

var sub_second = prompt('second sub amount?');
  sub_second = parseFloat(sub_second);

var sub_third = prompt(' third sub amount?');
  sub_third = parseFloat(sub_third);


var sub = sum
  sub = sub - sub_first;
  sub = sub - sub_second;
  sub = sub - sub_third;
if (sub >= 0 )
  {
  console.log (first_name + lastname);
  console.log('your balance is :' + sub);
  }
else if (sub < 0)
  sub (sub +50);
console.log('you charged 50$ for overdraft. your current balance is :' +sub);


