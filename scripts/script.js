
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

//var person = prompt("Please enter your name", "Harry Potter");

//if (person == null || person == "") {
//  txt = "User cancelled the prompt.";
//  txt = "Hello " + person + "! How are you today?";
//