const sliderModule = () => {
    
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        const dots = slider.querySelectorAll('.slider__dot-item');
        let currentIndex = 0;
    
        function showSlide(index) {
            const sliderContent = slider.querySelector('.slider__content');
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
    
        showSlide(currentIndex);
        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            showSlide(currentIndex);
        }, 3000);
    })

}

module.exports = sliderModule;