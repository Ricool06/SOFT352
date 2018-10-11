function getColor(color){ // eslint-disable-line no-unused-vars
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      changeColor(this);
    }
  };

  request.open('GET', 'http://localhost:8080/' + color, true);
  request.send();
}

function changeColor(requestContext){
  let response = JSON.parse(requestContext.response);
  let spanId = response.color + 'Div';

  document.getElementById(spanId).innerHTML = 'Here is some <span style="color:'
  + response.color + ';">'
  + response.color
  + '</span>';

  let time = new Date(response.time);
  document.getElementById('time').innerText = time;
}