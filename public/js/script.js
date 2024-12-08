cog = document.querySelector(".system");
cog.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".sidebar").classList.toggle("side");
  document.querySelector(".dark").classList.toggle("dark2");
  document.querySelector(".light").classList.toggle("light2");
});

menu = document.querySelector(".menu1");
menu.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".menu2").classList.toggle("menu3");
});

dark = document.querySelector(".dark");
dark.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".l").classList.add("l1");
});

light = document.querySelector(".light");
light.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".l").classList.remove("l1");
});
