document.getElementById("toggle-menu").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});



// Dropdown toggle for small screens
document.querySelector(".menu-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".dropdown-content").classList.toggle("show");
});