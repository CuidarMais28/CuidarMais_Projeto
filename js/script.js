let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    
    if (slides.length === 0) return;


    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.style.display = "none"; 
    });

    slides[index].classList.add("active");
    slides[index].style.display = "block";
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
});