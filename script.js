document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("navbarToggler");
  const exitIcon = document.getElementById("exitIcon");
  const navMenu = document.getElementById("navMenu");

  navbarToggler.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    exitIcon.style.display = "block";
    navbarToggler.style.display = "none";
  });

  exitIcon.addEventListener("click", function () {
    navMenu.classList.remove("show");
    exitIcon.style.display = "none";
    navbarToggler.style.display = "block";
  });
});
