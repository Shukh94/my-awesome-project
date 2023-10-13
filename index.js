function scrollValue() {
  let navbar = document.getElementById("navbar");
  let scroll = window.scrollY;
  if (scroll < 50) {
    navbar.classList.remove("BgColour");
  } else {
    navbar.classList.add("BgColour");
  }
}
window.addEventListener("scroll", scrollValue);

document.querySelector(".btn").addEventListener("click", function () {
  let yourName = prompt("What is your name?");
  let email = prompt("Enter your email");
  let learnOrListen = prompt("Do you wanna learn or listen?");

  if (learnOrListen === "Listen" || learnOrListen === "listen") {
    alert("We sent links to your email");
  } else {
    alert("We sent some sources to your email");
  }
});
