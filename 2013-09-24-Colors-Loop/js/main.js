
var colors =[];


var reponse = prompt('Enter a color or quit');
while(reponse)
{
colors.push(reponse);
reponse = prompt('Enter your color');
}

for(var count = 0; count < colors.length; count++)
{
  console.log("you typed in color: " + colors[count]);
}

var sum = 0;
for (var loop = colors.length - 1; loop >= 0; loop--)
{
  sum += colors[loop].length;
   console.log("you typed in color: " + colors[loop]);

}
var avg = sum / colors.length;
console.log('avarrage is: '+ avg);
