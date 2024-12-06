

window.addEventListener("scroll", function () {
    var headDiv = document.querySelector(".head");
    var navbarContainer = document.querySelector(".container");

    if (window.scrollY > 55) { // Adjust scroll value as needed
        headDiv.style.top = "-55px"; // Hide the head div smoothly
        navbarContainer.style.top = "0"; // Move navbar to the top
    } else {
        headDiv.style.top = "0"; // Show head div
        navbarContainer.style.top = "55px"; // Keep navbar below head div
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".menu-icon");
    var navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        
        // Toggle between hamburger and cross icon
        if (menuIcon.classList.contains("open")) {
            menuIcon.classList.remove("open");
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
        } else {
            menuIcon.classList.add("open");
            menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Cross icon
        }
    });
});
window.addEventListener('scroll', function() {
    const scrollLine = document.querySelector('.scroll-line');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
  
    scrollLine.style.height = scrollPercent + 'vh';
  });
  




