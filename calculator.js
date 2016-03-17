var exp = "";
var display = document.getElementById('display');

$("button").on('click', function() {
  if ($(this).text() === 'AC') {
    exp = "";
  }
  else if ($(this).text() === 'CE') {
    exp = exp.slice(0,-1);
  }
  else if ($(this).text() === '=') {
    exp = eval(exp);
  } else {
 	exp += $(this).text();
  }display.placeholder = exp;
});