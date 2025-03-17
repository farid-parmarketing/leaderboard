document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".tab");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent immediate navigation
      const href = this.getAttribute("href"); // Get the page link

      document.querySelector(".website").classList.add("fade-out"); // Add fade-out animation

      setTimeout(() => {
        window.location.href = href; // Navigate after animation
      }, 500); // Wait for animation duration (500ms)
    });
  });

  // Add fade-in effect when the page loads
  document.querySelector(".website").classList.add("fade-in");
});
