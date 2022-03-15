/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface();

//creating the addEventlisteners for all Buttons and give them the function with the color-Nr. as a parameter
var buttons = document.querySelectorAll('button');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    csInterface.evalScript("changeLabelColor("+(index+1)+")");
  });
})


// labelColors are the original-colors of Adobe After Effects
var labelColors = ["B53838", "E4D84C", "A9CBC7", "E5BCC9", "A9A9CA", "E7C19E", "B3C7B3", "677DE0", "4AA44C", "8E2C9A", "E8920D", "7F452A", "F46DD6", "3DA2A5", "A89677", "1E401E"];
// Adding the # to the color-codes
for(var j=0; j<labelColors.length; j++) {
  labelColors[j] = '#' + labelColors[j];
}

// colorize the button
for(var i=0; i<labelColors.length; i++) {
  var buttonColor = document.querySelector('#color' + (i+1));
  buttonColor.style.backgroundColor = labelColors[i];
}