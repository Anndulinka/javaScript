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
  ((x + y) * y) / x + //zavorka zajištije aby se nescitaly blbosti k sobe
  "<br> zjistěte: x, y";

//Příkazy Alert, Prompt, Confirm
//alert informativní
//prompt chce reakci z klavesnice
/* //Alert + Prompt
var year = prompt('Ve kterém roce jsi se narodil/a?')
if(year < 1989)
  alert('Bylo ti třicet!');
else 
  alert('Bude ti třicet!');
*/

//Confirm
//var osmnact = confirm('Bylo vám již 18?');
//alert(osmnact);

//Podmíněné příkazy if a ?
var cislo = 18;
var osmnact;
if (cislo < 18) osmnact = "Nebylo vám ještě 18 let.";
else osmnact = "Bylo vám již 18 let.";

document.getElementById("cislo").innerHTML = osmnact;

//alternativa: (na jeden řádek)
osmnact = cislo < 18 ? false : true;
//za otazník: co se má do te promenne priradit (osmnact), dvojtecka je else
osmnact = cislo < 18 ? "Nebylo 18." : "Bylo 18.";
document.getElementById("cislo").innerHTML = document.getElementById(
  "cislo"
).innerHTML =
  "<br><br>" + osmnact;

/*
var promenna = prompt( 'zadej číslo', '')
//chceme aby uživatel zadal nejake cislo do promenne, načte ale string a pridá ke stingu cisla, musime proto pred promt přidat plus ono to pak prekonvertuje promennou ze stringu na číslo
alert(+promenna + 100);
*/

//funkce
function OdectiTri(x)
{
  return +x -3;
}
//alert(OdectiTri(5));



//for cyklus
for(var i = 0; i < 5; i++)
//alert(OdectiTri(i))

