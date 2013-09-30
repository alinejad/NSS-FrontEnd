var house = [];

var room_no = prompt('please ener number of rooms you want?');
room_no = parseInt(room_no);

for (var i=0; i<room_no; i++ )
{
  var room = {};
  room.name = prompt('what is your room name?');
  room.width = prompt('what is the room Width?');
  room.length = prompt('What is the room length?');
  room.windows_no = prompt('how many windows do you have?');

  house.push(room);
}

console.log('you have ' + room_no + ' rooms in your future house.');

var total_windows= 0;

for (var i = house.length -1; i >= 0  ; i--)
{
 total_windows += parseInt(house[i].windows_no);
}
console.log('your total number of windows is: ' + total_windows);

function sq (width,length)
{
  return width * length;
}

function house_sq(house)
{
 var total_sq_ft = 0;

  for (var i = house.length -1; i >= 0  ; i--)
  {
   total_sq_ft += sq(parseInt(house[i].width),parseInt(house[i].length));
  }
  return total_sq_ft;
}
console.log('your total square feet is: ' + house_sq(house));
console.log('your total cost for windows is: $' + total_windows * 250);

for (var i = house.length - 1; i >= 0; i--)
{
  console.log('the cost of ' + house[i].name +' room is: $' + 200 * sq(parseInt(house[i].width),parseInt(house[i].length)));
}

console.log('your total house cost is: ' + ((house_sq(house) * 200) + (total_windows * 250)));











