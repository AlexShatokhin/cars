const customSelectsModule = () => {
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
}

module.exports = customSelectsModule;