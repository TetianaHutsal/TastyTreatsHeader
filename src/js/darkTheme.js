document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.querySelector(".header-switch input");
  const body = document.body;

  themeSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.setAttribute("data-theme", "dark");
    } else {
      body.setAttribute("data-theme", "light");
    }
  });
});