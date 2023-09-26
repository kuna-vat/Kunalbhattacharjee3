
function login() {
  const a = document.getElementsByTagName("input");
  if (!a.checkValidity()) {
    document.getElementsByTagName("input").innerHTML = a.validationMessage;
  }else{
     document.getElementsByTagName("input").innerHTML = "input ok";
  }
}