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

dark = document.querySelector(".dark");
dark.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".l").classList.add("l1");
  document.querySelector(".light").classList.add("light1");
  document.querySelector(".dark").classList.add("dark1");
});

light = document.querySelector(".light");
light.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".l").classList.remove("l1");
  document.querySelector(".light").classList.remove("light1");
  document.querySelector(".dark").classList.remove("dark1");
});
