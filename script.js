const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");
const elemMain = document.getElementById("calc");
var hasErr = false; // Lägger att error inte är sant

let usedCurrencyRate = 0;

function fixSum(result) {
  // gör så att ett tal inte har jätte många decimaler och "cuttar" vid 4 decimaler så att talet inte blir för långt
  return result.toFixed(4);
}
function addDigit(thisSign) {
  // lägg till siffra
  if (hasErr) {
    // hasErr gör enkelt förklarat att, ifall det blir error så ska den göra funktionen ClearAll osen gå till att hasErr blir falskt igen
    clearAll();
    hasErr = false;
  }
  let calcScreen = elemCalcScreen.innerHTML;
  if (calcScreen.innerHTML == "ERROR") {
    // ifall det blir NaN så blir det Error samt gör calcscreen tom ifall du clickar på ClearAll
    calcScreen = "";
    elemCalcScreen.innerHTML = calcScreen;
  }
  elemCalcScreen.innerHTML += thisSign;
}
function clearAll() {
  // ta bort allt på skärmen
  elemCalcScreen.innerHTML = "";
}
function calcSum() {
  let tempScreen = elemCalcScreen.innerHTML;
  let result = eval(tempScreen);
  elemCalcScreen.innerHTML = fixSum(result); // gör enkla kalkuleringar som står på skärmen såsom 1+1 = 2
}
function btnCalcDollar() {
  // alla omvandlings funktioner gör att siffran du klickar in (kr) gångras med en viss siffra för att få det värdet jämfört med kr
  let CalcScreen = elemCalcScreen.innerHTML;
  try {
    let result = CalcScreen * 0.093;
    usedCurrencyRate = 0.093;
    if (isNaN(result)) {
      result = "ERROR";
      hasErr = true;
      elemCalcScreen.innerHTML = result;
      return;
    }
    elemCalcScreen.innerHTML = result;
  } catch {
    CalcScreen = "ERROR";
    elemCalcScreen.innerHTML = CalcScreen;
  }
}
function btnCalcEuro() {
  let CalcScreen = elemCalcScreen.innerHTML;
  try {
    // try och catch gör att den fångar upp alla errors, dvs den gör en try på koden och om det blir ett error så går den till catch och kör den koden
    let result = CalcScreen * 0.092; // eftersom min kod är generell så fångar den upp alla errors som finns, men man kan också specifiera vilka errors man vill fånga upp ifrån koden
    usedCurrencyRate = 0.092;
    if (isNaN(result)) {
      result = "ERROR";
      hasErr = true;
      elemCalcScreen.innerHTML = result;
      return;
    }
    elemCalcScreen.innerHTML = result;
  } catch {
    CalcScreen = "ERROR";
    elemCalcScreen.innerHTML = CalcScreen;
  }
}
function btnCalcRubel() {
  let CalcScreen = elemCalcScreen.innerHTML;
  try {
    let result = CalcScreen * 5.66;
    usedCurrencyRate = 5.66;
    if (isNaN(result)) {
      result = "ERROR";
      hasErr = true;
      elemCalcScreen.innerHTML = result;
      return;
    }
    elemCalcScreen.innerHTML = result;
  } catch {
    CalcScreen = "ERROR";
    elemCalcScreen.innerHTML = CalcScreen;
  }
}
function btnCalcKr() {
  let CalcScreen = elemCalcScreen.innerHTML;
  try {
    let result = (CalcScreen / usedCurrencyRate).toFixed(2);
    if (isNaN(result)) {
      result = "ERROR";
      hasErr = true;
      elemCalcScreen.innerHTML = result;
      return;
    }
    elemCalcScreen.innerHTML = result;
  } catch {
    CalcScreen = "ERROR";
    elemCalcScreen.innerHTML = CalcScreen;
  }
}
function rotate() {
  // knappen Flip gör så att hela kalkulatorn flippas 180 grader dvs upp och ner samt tillbaka till vanligt igen
  elemMain.classList.toggle("rotate");
}
