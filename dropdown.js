var select = document.getElementById('subject');
var option = ["generelt", "teknologi", "presse", "omos"];

for (var i = 0; i < option.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}
