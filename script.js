const errorImg = document.getElementById("icon-error");
const errorMsg = document.getElementById("msg");
const input = document.getElementById("email");
const email = document.querySelector("input#email");

function valid(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function validater() {
  if (valid(email.value) === false) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Please provide a valid email!";
    errorImg.style.display = "block";
    input.style.border = "2px solid red";
  } else {
    errorMsg.style.display = "none";
    errorImg.style.display = "none";
  }
}
