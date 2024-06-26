// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  const greetingElement = document.querySelector("#friend-greeting");

  const params = new URLSearchParams(document.location.search);
  const friendName = params.get("name");
  // logic to show change in greeting
  if (friendName) {
    greetingElement.textContent = `Hi ${friendName}!`;
  } else {
    greetingElement.textContent = `hello ${friendName}!`;
  }
});
