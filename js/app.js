document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => link.addEventListener("click", () => {
    // Smooth scrolling is handled by CSS; this keeps navigation lightweight.
  }));
});
