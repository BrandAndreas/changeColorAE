function changeLabelColor(colorNr) {
  var proj = app.project;
  
  // checking if comp or project-window is selected
  if(proj.activeItem instanceof CompItem) {
    var items = getSelectedItems(proj.activeItem.layers);
  } else {
    var items = getSelectedItems(proj.items);
  }

  // collecting the selected Elements in an array
  function getSelectedItems(collectionObject) {
    var selectedItems = [];
    for(var i=1; i<=collectionObject.length; i++) {
          if(collectionObject[i].selected) {
            selectedItems.push(collectionObject[i]);
            }
        }
        return selectedItems;
    }

  // changing the label color
  function changeColor(itemsArray, colorNr) {
    for(var i=0; i<itemsArray.length; i++){
        itemsArray[i].label = colorNr;
      }
  }
      
  changeColor(items, colorNr);
}