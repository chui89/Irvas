// jshint esversion: 6
import timer from './parts/timer.js';
import modals from './parts/modals.js';
import tabs from './parts/tabs.js';
import images from './parts/images.js';
import calc from './parts/calc.js';

window.addEventListener('DOMContentLoaded', () => {
    // 'use strict';

    //  Timer
    timer();
    // Modals
    modals();
    //Tabs
    tabs();
    //Images
    images();
    //Calc
    calc();
});