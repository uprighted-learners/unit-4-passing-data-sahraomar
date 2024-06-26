// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  const formElement = document.getElementById("name-form");
  const inputElement = document.getElementById("user-input");
  const responseElement = document.querySelector("#computer-response"); // for "go away!"

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = inputElement.value.trim().toLowerCase();
    const enemies = ["plankton", "moe", "larry"]; // Add your enemies' names here in lowercase

    if (enemies.includes(userName)) {
      responseElement.textContent = "Go away!";
      responseElement.style.color = "red"; // Emphasize the enemy response
    } else {
      document.location =
        "/greeting.html?name=" + encodeURIComponent(inputElement.value.trim());
    }

    inputElement.value = ""; // Clear the input field
  });
});
