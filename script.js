function toggleNav() {
  const outgrid = document.querySelector(".out-grid");
  outgrid.classList.toggle("out-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("navbar-hidden");
}
