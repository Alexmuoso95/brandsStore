function showSection(id) {
    const container = document.getElementById("catalogo");
    fetch(`sections/${id}.html`)
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            setupWhatsAppButtons();
        });
}

function setupWhatsAppButtons() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.textContent = "Lo quiero! ordenar via WhatsApp 📲";
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-rosita');

        btn.onclick = () => {
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            const message = `Hola, quiero comprar: ${name} ($${price} MXN)`;
            const url = "https://wa.me/5213121932095?text=" + encodeURIComponent(message);
            window.open(url, '_blank');
        };
    });
}

// Agrega a cada enlace del menú la acción de cerrar el menú colapsado
document.addEventListener("DOMContentLoaded", () => {
    // Detecta todos los enlaces del navbar
    const menuLinks = document.querySelectorAll('.navbar-nav .nav-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const isExpanded = navbarCollapse.classList.contains('show');

            if (isExpanded) {
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click(); // Simula el click para cerrar el menú
            }
        });
    });

    // Si tienes otras inicializaciones como setupWhatsAppButtons, las puedes llamar aquí también
    setupWhatsAppButtons();
});

function closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Simula un clic para cerrarlo
    }
}


// Agrega a cada enlace del menú la acción de cerrar
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', closeNavbar);
});


function abrirMenu() {
    const toggler = document.querySelector('.navbar-toggler');
    if (toggler && window.innerWidth < 992) {
        toggler.click(); // Abre el menú si estás en móvil
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Si estás en escritorio, haces scroll al navbar
        const navbar = document.querySelector('nav');
        navbar.scrollIntoView({ behavior: 'smooth' });
    }
}