function showTab(spell, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementById(spell).getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementById(spell).getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.setProperty("display", "block");
    event.target.className += " active";
}

let warlock = true;
let cleric = true;
let standard = true;
let battlemage = true;
let druid = true;
let spatial = true;

function filterOut(book) {
  switchButton(book);
  switch (book) {
    case 'warlock':
      if (warlock) {
        warlock = false;
      } else {
        warlock = true;
      }
      break;
    case 'cleric':
      if (cleric) {
        cleric = false;
      } else {
        cleric = true;
      }
      break;
    case 'standard':
      if (standard) {
        standard = false;
      } else {
        standard = true;
      }
      break;
    case 'battlemage':
      if (battlemage) {
        battlemage = false;
      } else {
        battlemage = true;
      }
      break;
    case 'druid':
      if (druid) {
        druid = false;
      } else {
        druid = true;
      }
      break;
    case 'spatial':
      if (spatial) {
        spatial = false;
      } else {
        spatial = true;
      }
      break;
  }
  updateBook();
}

function switchAll() {
  warlock = battlemage = standard = cleric = druid = spatial = false;
  document.getElementById('b-warlock').className = document.getElementById('b-warlock').className.replace("active", "");
  document.getElementById('b-battlemage').className = document.getElementById('b-battlemage').className.replace("active", "");
  document.getElementById('b-standard').className = document.getElementById('b-standard').className.replace("active", "");
  document.getElementById('b-cleric').className = document.getElementById('b-cleric').className.replace("active", "");
  document.getElementById('b-druid').className = document.getElementById('b-druid').className.replace("active", "");
  document.getElementById('b-spatial').className = document.getElementById('b-spatial').className.replace("active", "");
  updateBook();
}

function switchButton(id) {
  theButton = document.getElementById('b-' + id);
  if (theButton.className.indexOf('active') > -1) {
    theButton.className = theButton.className.replace("active", "");
  } else {
    theButton.className += "active";
  }
}

// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("spell");
//   if (c == "all") {
//     c = "";
//   }
//   for (i = 0; i < x.length; i++) {
//     hideSpell(x[i]);
//     if (x[i].className.indexOf(c) > -1) {
//       showSpell(x[i]);
//     }
//   }
// }

function updateBook() {
  let x, i;
  x = document.getElementsByClassName('spell');
  for (i = 0; i < x.length; i++) {
    hideSpell(x[i]);
  }
  for (i = 0; i < x.length; i++) {
    if ((contains(x[i], 'standard') && standard) || (contains(x[i], 'cleric') && cleric) || (contains(x[i], 'warlock') && warlock) || (contains(x[i], 'battlemage') && battlemage) || (contains(x[i], 'druid') && druid) || (contains(x[i], 'spatial') && spatial)) {
      showSpell(x[i]);
    }
  }
}

function hideSpell(element) {
  element.className = element.className.replace(" show", "");
}

function showSpell(element) {
  element.className += " show";
}

function contains(element, book) {
  return element.classList.contains(book);
}

updateBook();