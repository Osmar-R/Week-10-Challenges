function changeBackground(className) {
  document.getElementsByTagName("body").className = className;
}
document.body.addEventListener("click", (e) => {
  if (e.target.id == "first-button") {
    changeBackground("turnWhite");
  }

  if (e.target.id == "second-button") {
    changeBackground("turnRed");
  }
});
