const modalModule = () => {

    const productCards = document.querySelectorAll('.product-card__info-main');

    productCards.forEach(card => {
        const model = card.querySelector('.model').textContent.toUpperCase();
        const brand = card.querySelector('.brand').textContent.toUpperCase();
        const button = card.querySelector(".product-card__info-button");
        showModal(button, `
            <div class="modal-item">
                <p>Прекрасный выбор! Вы выбрали <span>${model} ${brand}</span>. Заполните свои контактные данные, и мы оперативно свяжемся с вами, чтобы помочь с оформлением вашей мечты!
                </p>
            </div>`);
    });

    const applicationButtons = document.querySelectorAll("#application");
    applicationButtons.forEach(button => showModal(button, `
        <div class="modal-item">
            <label for="modal-input-description">Опиcание</label>
            <textarea id="modal-input-description" type="text" class="modal-input modal-input-description" placeholder="Вы не смогли определиться или найти нужный автомобиль?
Опишите кратко модель или характеристики, которые вам нужны. Мы свяжемся с вами в короткий срок и поможем найти оптимальный вариант под ваш бюджет и задачи!"></textarea>
        </div>`))

}

const showModal = (item, content) => {
    const modal = document.querySelector('.modal');

    item.addEventListener('click', () => {
        modal.classList.toggle('hidden');
        const modalContent = document.querySelector('.modal-main');
        modalContent.innerHTML = content;
    });

    modal.addEventListener("click", (e) => {
        const target = e.target;
        if(target.classList.contains("modal") || target.classList.contains("button-main")) {
            modal.classList.add('hidden');
        }
    });
}

module.exports = modalModule;

