const accrodionModule = () => {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
        const textElement = item.querySelector('.accordion__text');
        const arrowElement = item.querySelector('.accordion__arrow');
        const fullText = textElement.textContent;
        const truncatedText = fullText.slice(0, 100) + '...';
        textElement.setAttribute('data-full-text', fullText);

        if (fullText.length > 100) {
            textElement.textContent = truncatedText;
        }

        arrowElement.addEventListener('click', () => {
            const isCarItem = item.getAttribute('data-mode') === 'car';
            if(isCarItem){
                const allCars = document.querySelectorAll('.accordion__item[data-mode="car"]');
                allCars.forEach(car => toggleAccordionMode(car));
            } else {
                toggleAccordionMode(item)
            }
        });

        const toggleAccordionMode = (item) => {
            const isCarItem = item.getAttribute('data-mode') === 'car';
            const textElement = item.querySelector('.accordion__text');
            const arrowElement = item.querySelector('.accordion__arrow');
            const fullText = textElement.getAttribute('data-full-text');
            const truncatedText = fullText.slice(0, 100) + '...';

            if (arrowElement.classList.contains('open')) {
                textElement.textContent = truncatedText;
            } else {
                textElement.textContent = fullText;
            }
            item.style.height = (isCarItem ? 210 : 90) + textElement.offsetHeight + "px";
            arrowElement.classList.toggle('open');
        }
    });
}

module.exports = accrodionModule;