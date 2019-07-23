console.log('I am Javascript');
let body = document.body;
console.log(body);

window.onload = function() {
  let body = document.body;
  console.log(body);
  let redButton = document.getElementById('red');
  console.log(redButton);

  redButton.onclick = function() {
    console.log("You clicked on the red button");
    body.style.backgroundColor = "red";
  }

  let greenButton = document.getElementById('green');
  console.log(greenButton);

  greenButton.onclick = function() {
    console.log('You clicked on the green button');
    body.style.backgroundColor = "green";
  }

  let blueButton = document.getElementById('blue');
  console.log(blueButton);

  blueButton.onclick = function() {
    console.log('You clicked on the blue button');
    body.style.backgroundColor = "blue";
  }
}
