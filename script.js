const mainTitle = document.querySelector("header h1");

mainTitle.addEventListener("mouseover", function() {
    mainTitle.style.color = getRandomColor();
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.addEventListener("DOMContentLoaded", function() {
    // Agrega clases para mostrar elementos con animación
    document.querySelector("header").classList.add("show");
    document.querySelector("#about .content").classList.add("show");
    document.querySelector("#projects .content").classList.add("show");
    document.querySelector("#skills .content").classList.add("show");
    document.querySelector("#contact .content").classList.add("show");
    document.querySelector("footer .footer-content").classList.add("show");
});


document.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.querySelectorAll(".project-link").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const projectUrl = this.getAttribute("href");
        window.location.href = projectUrl;
    });
});



function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput.value.trim() === "") {
        showError("Por favor, ingresa tu nombre.");
        return false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError("Por favor, ingresa una dirección de correo electrónico válida.");
        return false;
    }

    if (messageInput.value.trim() === "") {
        showError("Por favor, ingresa un mensaje.");
        return false;
    }

    clearErrors();
    return true;
}


function showError(message) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}


function clearErrors() {
    document.getElementById("error-message").style.display = "none";
}


function handleSubmit(event) {
    event.preventDefault();

    
    if (validateForm()) {
        
        setTimeout(function() {
            alert("¡Mensaje enviado con éxito! Gracias por ponerte en contacto.");
            
            document.getElementById("contact-form").reset();
        }, 1000);
    }
}