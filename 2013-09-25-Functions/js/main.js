function square(x)
{
  var sq = x * x ;
  return sq;
}

function cube(x);
{
  return square(x) * x;
}

function area_rect(width,height)
{
  return width * height;
}

function area_square(side)
{
  return square(side);
}

function triangle(width,height)
{
  return (width * height) / 2 ;
}

function area_circle(radius)
{
  return Math.PI * radius * radius;
}

function cuft_to_gallons(cubic_feet)
{
  return (7.48052) * cubic_feet;
}

function volume_cylinde(radius, depth)
{
  area_circle(radius) * depth;
}

var diameter = 30;
var depth = 9;

var gallons = cuft_to_gallons() volume_cylinde(diameter / 2, depth));

console.log('You have '+ gallons + 'gallons of water in your pool');




















