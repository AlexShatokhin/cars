import "./main.scss"


document.addEventListener('DOMContentLoaded', () => {

    const customSelects = document.querySelectorAll('.custom-select');
    customSelects.forEach(select => {
        select.addEventListener('click', () => {
            select.classList.toggle('open');
            const options = select.querySelector('.select-options');
            const optionItems = options.querySelectorAll('.select-options__item');
            options.classList.toggle('hide');

            optionItems.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const selectedValue = option.textContent;
                    select.querySelector(".select").textContent = selectedValue;
                    options.classList.add('hide');
                    optionItems.forEach(option => option.classList.remove('selected'));
                    option.classList.add('selected');
                });
            })
        });
    })

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
    
        // Инициализация первого слайда
        showSlide(currentIndex);
        // const autoSlide = setInterval(() => {
        //     currentIndex = (currentIndex + 1) % dots.length;
        //     showSlide(currentIndex);
        // }, 5000);
    })



    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
        const textElement = item.querySelector('.accordion__text');
        const arrowElement = item.querySelector('.accordion__arrow');
        const fullText = textElement.textContent;
        const truncatedText = fullText.slice(0, 100) + '...';

        if (fullText.length > 100) {
            textElement.textContent = truncatedText;
        }

        arrowElement.addEventListener('click', function() {
            if (arrowElement.classList.contains('open')) {
                textElement.textContent = truncatedText;
            } else {
                textElement.textContent = fullText;
            }
            arrowElement.classList.toggle('open');
        });
    });
});