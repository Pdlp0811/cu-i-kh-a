cog = document.querySelector(".system");
cog.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".sidebar").classList.toggle("side");
});

menu = document.querySelector(".menu1");
menu.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".menu2").classList.toggle("menu3");
});
