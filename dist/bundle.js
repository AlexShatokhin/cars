/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cars/./src/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n\r\n\r\nconst customSelectsModule = __webpack_require__(/*! ./js/select */ \"./src/js/select.js\");\r\nconst sliderModule = __webpack_require__(/*! ./js/slider */ \"./src/js/slider.js\");\r\nconst accordionModule = __webpack_require__(/*! ./js/accordion */ \"./src/js/accordion.js\");\r\nconst modalModule = __webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    customSelectsModule();\r\n    sliderModule();\r\n    accordionModule();\r\n    modalModule();\r\n    \r\n});\n\n//# sourceURL=webpack://cars/./src/index.js?");

/***/ }),

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/***/ ((module) => {

eval("const accrodionModule = () => {\r\n    const accordionItems = document.querySelectorAll('.accordion__item');\r\n\r\n    accordionItems.forEach(item => {\r\n        const textElement = item.querySelector('.accordion__text');\r\n        const arrowElement = item.querySelector('.accordion__arrow');\r\n        const fullText = textElement.textContent;\r\n        const truncatedText = fullText.slice(0, 100) + '...';\r\n        textElement.setAttribute('data-full-text', fullText);\r\n\r\n        if (fullText.length > 100) {\r\n            textElement.textContent = truncatedText;\r\n        }\r\n\r\n        arrowElement.addEventListener('click', () => {\r\n            const isCarItem = item.getAttribute('data-mode') === 'car';\r\n            if(isCarItem){\r\n                const allCars = document.querySelectorAll('.accordion__item[data-mode=\"car\"]');\r\n                allCars.forEach(car => toggleAccordionMode(car));\r\n            } else {\r\n                toggleAccordionMode(item)\r\n            }\r\n        });\r\n\r\n        const toggleAccordionMode = (item) => {\r\n            const isCarItem = item.getAttribute('data-mode') === 'car';\r\n            const textElement = item.querySelector('.accordion__text');\r\n            const arrowElement = item.querySelector('.accordion__arrow');\r\n            const fullText = textElement.getAttribute('data-full-text');\r\n            const truncatedText = fullText.slice(0, 100) + '...';\r\n\r\n            if (arrowElement.classList.contains('open')) {\r\n                textElement.textContent = truncatedText;\r\n            } else {\r\n                textElement.textContent = fullText;\r\n            }\r\n            item.style.height = (isCarItem ? 210 : 90) + textElement.offsetHeight + \"px\";\r\n            arrowElement.classList.toggle('open');\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = accrodionModule;\n\n//# sourceURL=webpack://cars/./src/js/accordion.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((module) => {

eval("const modalModule = () => {\r\n\r\n    const productCards = document.querySelectorAll('.product-card__info-main');\r\n\r\n    productCards.forEach(card => {\r\n        const model = card.querySelector('.model').textContent.toUpperCase();\r\n        const brand = card.querySelector('.brand').textContent.toUpperCase();\r\n        const button = card.querySelector(\".product-card__info-button\");\r\n        showModal(button, `\r\n            <div class=\"modal-item\">\r\n                <p>Прекрасный выбор! Вы выбрали <span>${model} ${brand}</span>. Заполните свои контактные данные, и мы оперативно свяжемся с вами, чтобы помочь с оформлением вашей мечты!\r\n                </p>\r\n            </div>`);\r\n    });\r\n\r\n    const applicationButtons = document.querySelectorAll(\"#application\");\r\n    applicationButtons.forEach(button => showModal(button, `\r\n        <div class=\"modal-item\">\r\n            <label for=\"modal-input-description\">Опиcание</label>\r\n            <textarea id=\"modal-input-description\" type=\"text\" class=\"modal-input modal-input-description\" placeholder=\"Вы не смогли определиться или найти нужный автомобиль?\r\nОпишите кратко модель или характеристики, которые вам нужны. Мы свяжемся с вами в короткий срок и поможем найти оптимальный вариант под ваш бюджет и задачи!\"></textarea>\r\n        </div>`))\r\n\r\n}\r\n\r\nconst showModal = (item, content) => {\r\n    const modal = document.querySelector('.modal');\r\n\r\n    item.addEventListener('click', () => {\r\n        modal.classList.toggle('hidden');\r\n        const modalContent = document.querySelector('.modal-main');\r\n        modalContent.innerHTML = content;\r\n    });\r\n\r\n    modal.addEventListener(\"click\", (e) => {\r\n        const target = e.target;\r\n        if(target.classList.contains(\"modal\") || target.classList.contains(\"button-main\")) {\r\n            modal.classList.add('hidden');\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = modalModule;\r\n\r\n\n\n//# sourceURL=webpack://cars/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ ((module) => {

eval("const customSelectsModule = () => {\r\n    const customSelects = document.querySelectorAll('.custom-select');\r\n    customSelects.forEach(select => {\r\n        select.addEventListener('click', () => {\r\n            select.classList.toggle('open');\r\n            const options = select.querySelector('.select-options');\r\n            const optionItems = options.querySelectorAll('.select-options__item');\r\n            options.classList.toggle('hide');\r\n\r\n            optionItems.forEach(option => {\r\n                option.addEventListener('click', (e) => {\r\n                    e.stopPropagation();\r\n                    const selectedValue = option.textContent;\r\n                    select.querySelector(\".select\").textContent = selectedValue;\r\n                    options.classList.add('hide');\r\n                    optionItems.forEach(option => option.classList.remove('selected'));\r\n                    option.classList.add('selected');\r\n                });\r\n            })\r\n        });\r\n    })\r\n}\r\n\r\nmodule.exports = customSelectsModule;\n\n//# sourceURL=webpack://cars/./src/js/select.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((module) => {

eval("const sliderModule = () => {\r\n    \r\n    const sliders = document.querySelectorAll(\".slider\");\r\n    sliders.forEach(slider => {\r\n        const dots = slider.querySelectorAll('.slider__dot-item');\r\n        let currentIndex = 0;\r\n    \r\n        function showSlide(index) {\r\n            const sliderContent = slider.querySelector('.slider__content');\r\n            sliderContent.style.transform = `translateX(-${index * 100}%)`;\r\n            dots.forEach(dot => dot.classList.remove('dot-item-active'));\r\n            dots[index].classList.add('dot-item-active');\r\n        }\r\n    \r\n        dots.forEach((dot, index) => {\r\n            dot.addEventListener('click', () => {\r\n                currentIndex = index;\r\n                showSlide(currentIndex);\r\n            });\r\n        });\r\n    \r\n        showSlide(currentIndex);\r\n        setInterval(() => {\r\n            currentIndex = (currentIndex + 1) % dots.length;\r\n            showSlide(currentIndex);\r\n        }, 3000);\r\n    })\r\n\r\n}\r\n\r\nmodule.exports = sliderModule;\n\n//# sourceURL=webpack://cars/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;