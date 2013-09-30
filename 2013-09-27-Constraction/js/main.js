function area(l, w)
{
  return l * w;
}

const PRICE_PER_SQFT = 200;
const PRICE_PER_WINDOWS =250;

var house = {};
house.number_of_rooms = parseInt(prompt('number of rooms?'));
house.number_of_windows = 0;
house.area = 0
house.rooms = [];


for (var i = 0; i < house.number_of_rooms; i++)
 {
  var room = {};
  room.name = prompt('name?');
  room.windows = parseInt(prompt('number of windows?'));
  house.number_of_windows += room.windows;
  room.length = parseInt(prompt('length?'));
  room.width = parseInt(prompt('width?'));
  room.area = area(room.length, room.width);
  house.area += room.area;
  house.rooms.push(room);
 }

house.area_cost = house.area * PRICE_PER_SQFT;
house.windows_cost = house.number_of_windows * PRICE_PER_WINDOWS;
house.total_cost = house.area_cost + house.windows_cost;

debugger;



