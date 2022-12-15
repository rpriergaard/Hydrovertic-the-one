// søgefelt (array)//
var events = ["Vores system", "Kontakt os", "Hydroponi", "Om os", "FN´s verndesmål", "Partnere", "Nyheder", "Teknologi", "Kemikalier", "Natur", "Vand"];


function autocomplete(inp, arr) {
  /*Element med søgefelt tekst og element med events:*/
  var currentFocus;
  /*starter funktion når nogen skriver i søgefeltet:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*lukker andre åbne funtioner når man åbner søgefelt*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*Åbner en DIV der kommer med variaben events, man kan se i toppen:*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*Sætter tidligere DIV element som child af søgefeltet så det ikke erstatter:*/
    this.parentNode.appendChild(a);
    /*sørger for at alle childs af arrayet kommer med*/
    //loop
    for (i = 0; i < arr.length; i++) {
      /*tjekker om eventet har samme forbogstav som det man søger på:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*skaber en DIV element hvor hver child/array der kan passe til søgningen:*/
        b = document.createElement("DIV");
        /*gør som det første bogstav der passer til bliver i fed skrift:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*indsætter input felt der indeholde værdien af det array der kommer op:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*starter funktion der vil ske hvis man trygger på array punktet så det kommer op i søgefeltet:*/
        b.addEventListener("click", function (e) {
          /*sætter den færdige værdi op i søgefeltet:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*lukker events dropdown:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*starter funktion når man trykker på keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*når man trykker på pil ned bliver events gjordt blå og fokuseret*/
      currentFocus++;
      /*og gør eventet nemmere at se:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*når man trykker på pil op kommer man tilbage i søgefelt*/
      currentFocus--;
      /*og det tidligere event mere synligt:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*stopper en fuktion ved at ske hvis man trykker enter*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*viser et klik og valg at søgefelt tekst:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a funktion der gør events aktive:*/
    if (!x) return false;
    /*starter med at fjerne aktiv fra alle events:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*tilføjer en class der hedder "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*en funktion der fjerne aktiv fra alle events:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*fjerner alle de autocomplete tekst udover den der er valgt i søgefelt:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*går væk fra fuktionen når man klikker en andet sted på siden:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("eventsInput"), events);
//søgefelt//