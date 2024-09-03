AOS.init();

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  backTop?.classList.toggle("active", window.scrollY > 200);
});
