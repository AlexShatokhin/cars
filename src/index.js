import "./main.scss"

const customSelectsModule = require("./js/select");
const sliderModule = require("./js/slider");
const accordionModule = require("./js/accordion");

document.addEventListener('DOMContentLoaded', () => {

    customSelectsModule();
    sliderModule();
    accordionModule();
    
});