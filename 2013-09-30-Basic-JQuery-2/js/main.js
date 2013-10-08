$(document).ready(initialize);

function initialize()
{
  $('#button1').click(change_green);
}

function change_green()
{
$('#green').css('background-color', 'green');
}



function counter()
{
  $('#name_btn').click(count);
}
function count()
{
  var name = $('#name_text').val();
  var length = name.length;
  $('#name_div').text(name + "is "+ length + "characters long");
}