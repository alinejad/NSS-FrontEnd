
var p1 =[];
var p2 = [];


for (var i = 0; i <1 ;i++)
{
  var x1 = prompt('please Enter the number?');
  x1 = parseFloat(x1);
  p1.push(x1);
  var y1 = prompt('please Enter the number?');
  y1 = parseFloat(y1);
  p1.push(y1);
}

for (var i = 0; i <1 ;i++)
{
  var x2 = prompt('please Enter the number?');
  x2 = parseFloat(x2);
  p2.push(x2);
  var y2 = prompt('please Enter the number?');
  y2 = parseFloat(y2);
  p2.push(y2);
}

var a = p2[0] - p1[0];
var b = p2[1] - p1[1];
var c =Math.sqrt((Math.pow(a,2)+Math.pow(b,2)));
console.log('the distance between the point is : ' + c);




/* Chyld coding

var points =[];
for (var i= 0; 1 < 2; i++)
{
  var point = {};
  point.x = parseFloat(prompt('x number?'));
  point.y = parseFloat(prompt('y number?'));
  point.push(points);
}

var dy = points[0].y - points[1].y;
var dx = points[0].x - points[1].y;

here is the coding for calculation.


*/