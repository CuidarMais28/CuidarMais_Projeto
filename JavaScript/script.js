/* ==========================================================================
   1. SLIDER (CARROSSEL)
   ========================================================================== */
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

if (slides.length > 0) {
    slides[slideIndex].classList.add("active");
    intervalId = setInterval(nextSlide, 5000); 
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[slideIndex].classList.add("active");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000); 
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn) prevBtn.addEventListener("click", prevSlide);
if (nextBtn) nextBtn.addEventListener("click", nextSlide);

/* ==========================================================================
   2. SWIPER (DEPOIMENTOS)
   ========================================================================== */
if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".meuSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}

/* ==========================================================================
   3. DARK MODE
   ========================================================================== */
const darkToggle = document.getElementById("dark-toggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    if(darkToggle) darkToggle.checked = true;
}

if(darkToggle) {
    darkToggle.addEventListener("change", () => {
        if (darkToggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
}

/* ==========================================================================
   4. MENU MOBILE (FECHAR AO CLICAR)
   ========================================================================== */
const menuToggle = document.getElementById('menu-toggle');
const cabecalho = document.querySelector('.cabecalho');
const menuLinks = document.querySelectorAll('.cabecalho a');
const labelMenu = document.querySelector('.menu-hamburguer');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(menuToggle) menuToggle.checked = false;
    });
});

document.addEventListener('click', (event) => {
    if (menuToggle && menuToggle.checked) {
        const clicouDentroMenu = cabecalho.contains(event.target);
        const clicouNoBotao = labelMenu.contains(event.target);
        const clicouNoInput = (event.target === menuToggle);

        if (!clicouDentroMenu && !clicouNoBotao && !clicouNoInput) {
            menuToggle.checked = false;
        }
    }
});

/* ==========================================================================
   5. FLIP CARDS (CORREÇÃO DE CLIQUE)
   ========================================================================== */
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation(); 
        card.classList.toggle('virado');
    });
});

/* ==========================================================================
   6. VALIDAÇÃO DO FORMULÁRIO (NOVO)
   ========================================================================== */
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function(event) {
        // Impede o recarregamento da página
        event.preventDefault();

        // Pega os campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação extra por segurança (o required do HTML já faz isso)
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Mensagem de sucesso
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            
            // Limpa o formulário
            formContato.reset();
        }
    });
}