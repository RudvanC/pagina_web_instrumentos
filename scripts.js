
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Alternar el menú al hacer clic en el icono
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
    
    
    
    //Flecha Top//
    
    
    let scrollToTopBtn = document.getElementById("scrollToTop");

    // Mostrar el botón cuando el usuario baja 100px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Volver al inicio al hacer clic
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});







