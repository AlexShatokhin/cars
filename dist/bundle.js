/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cars/./src/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    const customSelects = document.querySelectorAll('.custom-select');\r\n    customSelects.forEach(select => {\r\n        select.addEventListener('click', () => {\r\n            select.classList.toggle('open');\r\n            const options = select.querySelector('.select-options');\r\n            const optionItems = options.querySelectorAll('.select-options__item');\r\n            options.classList.toggle('hide');\r\n\r\n            optionItems.forEach(option => {\r\n                option.addEventListener('click', (e) => {\r\n                    e.stopPropagation();\r\n                    const selectedValue = option.textContent;\r\n                    select.querySelector(\".select\").textContent = selectedValue;\r\n                    options.classList.add('hide');\r\n                    optionItems.forEach(option => option.classList.remove('selected'));\r\n                    option.classList.add('selected');\r\n                });\r\n            })\r\n        });\r\n    })\r\n\r\n    const sliders = document.querySelectorAll(\".slider\");\r\n    sliders.forEach(slider => {\r\n        const dots = slider.querySelectorAll('.slider__dot-item');\r\n        let currentIndex = 0;\r\n    \r\n        function showSlide(index) {\r\n            const sliderContent = slider.querySelector('.slider__content');\r\n            sliderContent.style.transform = `translateX(-${index * 100}%)`;\r\n            dots.forEach(dot => dot.classList.remove('dot-item-active'));\r\n            dots[index].classList.add('dot-item-active');\r\n        }\r\n    \r\n        dots.forEach((dot, index) => {\r\n            dot.addEventListener('click', () => {\r\n                currentIndex = index;\r\n                showSlide(currentIndex);\r\n            });\r\n        });\r\n    \r\n        // Инициализация первого слайда\r\n        showSlide(currentIndex);\r\n        setInterval(() => {\r\n            currentIndex = (currentIndex + 1) % dots.length;\r\n            showSlide(currentIndex);\r\n        }, 3000);\r\n    })\r\n\r\n\r\n\r\n    const accordionItems = document.querySelectorAll('.accordion__item');\r\n\r\n    accordionItems.forEach(item => {\r\n        const textElement = item.querySelector('.accordion__text');\r\n        const arrowElement = item.querySelector('.accordion__arrow');\r\n        const fullText = textElement.textContent;\r\n        const truncatedText = fullText.slice(0, 100) + '...';\r\n\r\n        if (fullText.length > 100) {\r\n            textElement.textContent = truncatedText;\r\n        }\r\n\r\n        arrowElement.addEventListener('click', function() {\r\n            if (arrowElement.classList.contains('open')) {\r\n                textElement.textContent = truncatedText;\r\n            } else {\r\n                textElement.textContent = fullText;\r\n            }\r\n            const isCarItem = item.getAttribute('data-mode') === 'car';\r\n            item.style.height = (isCarItem ? 210 : 90) + textElement.offsetHeight + \"px\";\r\n            arrowElement.classList.toggle('open');\r\n        });\r\n    });\r\n});\n\n//# sourceURL=webpack://cars/./src/index.js?");

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