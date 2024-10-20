import "./main.scss"


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider__content-item');
    const dots = document.querySelectorAll('.slider__dot-item');
    let currentIndex = 0;

    function showSlide(index) {
        const sliderContent = document.querySelector('.slider__content');
        sliderContent.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('dot-item-active'));
        dots[index].classList.add('dot-item-active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Инициализация первого слайда
    showSlide(currentIndex);
});