'use strict';


const iconeEl = document.querySelector('.menu_icone'); //элемент иконки бургера


if (iconeEl) {
    const menuEL = document.querySelector('.nav') //элемент меню скрывающегося

    iconeEl.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconeEl.classList.toggle('visible');
        menuEL.classList.toggle('visible');
    })
}






