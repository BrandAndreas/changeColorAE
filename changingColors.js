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