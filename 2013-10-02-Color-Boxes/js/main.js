$(document).ready(initialize);

function initialize()
{
  $('#colorbutton').click(makecolorboxes);
  $('#clearbutton').click(clearInput);
  $('#clearboxes').click(clearboxes);
  $('#colorstring').focus();

}

function clearboxes()
{
  $('#boxes').empty();
  clearInput();
}

function clearInput()
{
  $('#colorstring').val('');
  $('#colorstring').focus();

}

function makecolorboxes()
{

  var colorstring = $('#colorstring').val();
  var colors = colorstring.split(', ');
  for (var i = 0; i < colors.length; i++)
  {
    var $color = $('<div>');
    $color.addClass('box');
    $color.text(colors[i]);
    $color.css('background-color', colors[i]);

    $('#boxes').append($color);

  }
}