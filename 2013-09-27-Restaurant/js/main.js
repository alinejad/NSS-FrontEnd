var menu = {};
menu.sections = {};
menu.total_calotries = 0;

menu.number_of_section = parseInt(prompt('number of section?'));

for (var i = 0; i < menu.number_of_sections; i++)
{
  var section_name = prompt('name of section?');menu.section[section_name] = [];
  menu.sections[section_name] = [];

}
var item = {};
var response = prompt('nemu section or blank to Exit?');
while(response)
{
  var item = {};
  item.name = prompt('name?');
  item.calories = parseInt(prompt('calories?'));
  item.cost = parseFloat(prompt('cost?'));
  item.ingredients = prompt('ingredients?').split(', ');
  menu.sections[response].push(item);

  response = prompt('nemu section or blank to Exit?');
}

var section_list = object.getOwnPropertyNames(menu.section);

for (i - 0; i < section_list.length; i++)
{
  for (var j = 0; j < menu.sections[section_list[i]].length; j++)
  {
    menu.total_calotries += menu.sections[section_list[i]][j].calories;
  }
}








