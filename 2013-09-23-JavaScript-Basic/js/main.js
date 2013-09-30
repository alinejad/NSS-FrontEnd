/* this is multi line
javascripts
comment
*/

var first_name = prompt('what is your name?');
var last_name = prompt("what is your last name?");
var full_name = first_name+' '+ last_name;
var gender = prompt('what is your gender');
var age = prompt('what is your age?');
age = parseInt(age);
var bday_month =prompt('what month wree you born in?');
var current_month = prompt('what month is now?');

//debugger;

var test1 = prompt("score for test1?");
test1 = parseFloat(test1);

var test2 = prompt("score for test2?");
test1 = parseFloat(test2);

var test3 = prompt("score for test3?");
test1 = parseFloat(test3);

var sum = 0;
sum += test1;
sum += test2;
sum += test3;

var avarrage = sum /3;

if (avarrage<70)
  console.log('failed');
else if ((avarrage)=70 && (avarrage < 80))
  console.log('you made a C');
else if (avarrage >= 80 && avarrage<90)
  console.log('you made a B');
else
  console.log('you are an A');


var avarrage = (test1 + test2 + test3) /3 ;


console.log ("your full name:" + full_name);
console.log ("the avarrage of your number is :" + avarrage);

var null_variable = null, undefined_variable;

if ((first_name == 'farzad') && (last_name =='alinejad'))
  console.log('hey i know you');

if ((gender == 'female') && (age >=21))
  console.log('free drink');
else if ((gender == 'male') && (age >= 21))
  console.log('looks like you are buying');
else
  console.log ('not old enough to drink');

var can_have_cake = (current_month == bday_month);
var cake =(can_have_cake) ? "chocolate" :"vanilla";
console.log('marie antounet' + cake);

switch(bday_month)
{
  case "january":
  console.log('you are a cop corn');
  break;
  case "feburay":
  console.log('you are a pieces');
  break;
  default:
  console.log('you are not in this month  God speed');
}


