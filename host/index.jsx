var labelColors = ["B53838", "E4D84C", "A9CBC7", "E5BCC9", "A9A9CA", "E7C19E", "B3C7B3", "677DE0", "4AA44C", "8E2C9A", "E8920D", "7F452A", "F46DD6", "3DA2A5", "A89677", "1E401E"];

for(var i=0; i<labelColors.length; i++) {
  var buttonColor = document.querySelector('#color' + (i+1));
  var newColor = '#' + labelColors[i];
  buttonColor.style.backgroundColor = newColor;
}


// Color-Changer
function changeLabel1() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 1);
}


function changeLabel2() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 2);
}

function changeLabel3() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 3);
}

function changeLabel4() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 4);
}

function changeLabel5() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 5);
}

function changeLabel6() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 6);
}

function changeLabel7() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 7);
}

function changeLabel8() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 8);
}

function changeLabel9() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 9);
}

function changeLabel10() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 10);
}

function changeLabel11() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 11);
}

function changeLabel12() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 12);
}

function changeLabel13() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 13);
}

function changeLabel14() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 14);
}

function changeLabel15() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 15);
}

function changeLabel16() {
  var proj = app.project;

  if(proj.activeItem instanceof CompItem) {
    // Hier die selected Layer auslesen und in Array zurückgeben
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    // Hier die Items auslesen die selected sind und in Array zurückgeben
    var items = getSelectedItems(proj.items);
  }
  
  
  function getSelectedItems(collectionObject) {
      var selectedItems = [];
      for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
          selectedItems.push(collectionObject[i]);
          }
      }
      return selectedItems;
  }
  
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
      itemsArray[i].label = colorNr;
    }
  }

  changeColor(items, 16);
}