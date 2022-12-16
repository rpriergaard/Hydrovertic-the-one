//skaber en funktion for linker til "onclick event" funktion der sidder i HTML
function myFunction() {
  //DOM som henter "myLinks" listen inde fra HTML
    var x = document.getElementById("myLinks");
    //kontrolstruktur der at hvis man trykker på "ikonet" igen forsvinder menuen, ellers bliver den der selv hvis man scroller og trykker andre steder :(
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }