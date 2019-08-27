const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  console.log(e);
  // Check if the shift key is down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we want
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox == lastChecked) {
        inBetween = !inBetween;
        console.log('starting to check in between')
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener(
  'click', handleCheck));