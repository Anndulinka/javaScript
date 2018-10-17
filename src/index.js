let a = "Hello world!"; //let signalizuje promennou
//vytvořili jsme si ten app a do ´úvozovek vložíme co app bude obsahovat´
document.getElementById("app").innerHTML = a + "!!  <br/><br>";

document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML + ` Děláme javaScript :) `;
//priřadime ke stringu seme sama a něco
// alert('Dobrý den!'); vypíše v okne nahoře na stránce co je v uvozovkách

var x = 3;
var y = 15;
//let vs var trochu rozdíl v tom kdy je brana jako lokálni nebo jako soukromá
//malinkej rozdíl
//var víc používaný
document.getElementById("vysledek").innerHTML =
  "<br>příklad je: " +
  "(x + y) * y / x <br>" +
  "výsledek je: " +
  ((x + y) * y) / x +
  "<br> zjistěte: x, y";
