const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let btn = document.getElementById("sub-btn");

let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", () => {
  let email = document.getElementById("email");
  let card = document.getElementById("card");
  let thanksCard = document.getElementById("thanks-card");
  let succussEmail = document.getElementById("success-email");
  let validateMsg = document.getElementById("validate-msg");

  if (email.value.match(validRegex)) {
    card.classList.add("hide");
    thanksCard.classList.remove("hide");
    succussEmail.innerHTML = email.value;
  } else {
    validateMsg.innerHTML = "valid email required";
    email.style.color = "#ff6257";
    email.style.backgroundColor = "#ff625733";
    email.style.borderColor = "#ff6257";
    email.style.borderWidth = "1px";
    email.style.borderStyle = "solid";
  }
});
