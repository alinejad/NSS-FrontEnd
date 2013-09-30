var dogs = [];

var name = prompt('Enter a dog name or blank to exit?');

while(name)
{
  var dog = {};
  dog.name = name;
  dog.age = parseInt(prompt('age?'));
  dog.bread = prompt('bread ?');
  dogs.push(dog);
  name = prompt('Enter a dogs name or blaank to exit?');

}

var avg_age;
var sum_age = 0;

for (var i = 0; i < dogs.length; i++)
  sum_age += dogs[i].age;

avg_age =sum_age /dogs.length;

console.log('you have ' + dogs.length + 'dogs .the avrrage age is ' + Math.ceil(avrrage));