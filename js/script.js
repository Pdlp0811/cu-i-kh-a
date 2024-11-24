cog = document.querySelector(".system");

cog.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".sidebar").classList.toggle("side");
});

cog = document.querySelector(".menu1");

cog.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".menu2").classList.toggle("home");
});
