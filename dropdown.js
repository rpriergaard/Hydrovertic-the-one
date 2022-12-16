var select = document.getElementById('subject');
//array som går og vælger kategorierne/options fra HTML'en
var option = ["generelt", "teknologi", "presse", "omos"];
// options = object??
//loop gennemgår array elementerne og laver en DOM til hvert element og så tilsættes objektet
for (var i = 0; i < option.length; i++) {
//variabel som giver "opt" assignment til "options"
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
//event der selecter en option
  select.appendChild(el);
}
