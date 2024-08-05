const $body = document.getElementsByTagName("body")[0];

const $button = document.getElementById("myButton");

let messageElement = document.createElement("p");

$button.addEventListener("click", () => {
  messageElement.innerText = "Bonjour, vous avez cliqué sur le bouton !";

  $body.appendChild(messageElement);
});
