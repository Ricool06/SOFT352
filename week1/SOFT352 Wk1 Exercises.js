let nextColourMap = {
  '#ffff00': '#ff00ff',
  '#ff00ff': '#00ffff',
  '#00ffff': '#ffff00',
};

let keyboardKeyColourMap = {
  'c': '#00ffff',
  'm': '#ff00ff',
  'y': '#ffff00',
};

window.onkeypress = function(keyPressEvent) {
  let light = document.querySelector('body > div.main > div');
  light.style.backgroundColor = keyboardKeyColourMap[getCharFromKeyPressEvent(keyPressEvent)];
};

function getCharFromKeyPressEvent(event) {
  return event.key ? event.key : String.fromCharCode(event.keyCode);
}

function cycleColour() { // eslint-disable-line no-unused-vars
  let light = document.querySelector('body > div.main > div');
  light.style.backgroundColor = nextColourMap[rgb2hex(light.style.backgroundColor)]; // eslint-disable-line no-undef
}
