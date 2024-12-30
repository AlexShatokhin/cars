import "./main.scss"

const customSelectsModule = require("./js/select");
const sliderModule = require("./js/slider");
const accordionModule = require("./js/accordion");
const modalModule = require("./js/modal");

document.addEventListener('DOMContentLoaded', () => {

    customSelectsModule();
    sliderModule();
    accordionModule();
    modalModule();
    
});