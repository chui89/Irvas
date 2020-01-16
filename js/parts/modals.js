function modals() {
    // Request an engineer
    let engineerBtn = document.querySelector('.popup_engineer_btn'),
        engineerOverlay = document.querySelector('.popup_engineer'),
        engineerClose = engineerOverlay.querySelector('.popup_close');

    engineerBtn.addEventListener('click', () => {showEngineerModal();});

    const showEngineerModal = () => {
        engineerOverlay.style.display = 'block';
    };

    // Закрытие модального окна по клику на overlay
    engineerOverlay.addEventListener('click', function(event) {
        let target = event.target;
        if (target == engineerOverlay) {
            engineerOverlay.style.display = 'none';
        }
    });

    // Закрытие модального окна по клику на крестик
    engineerClose.addEventListener('click', () => {
        engineerOverlay.style.display = 'none';
    });

    // Request a call
    let phoneLinks = document.querySelectorAll('.phone_link'),
        popupOverlay = document.querySelector('.popup'),
        popupClose = popupOverlay.querySelector('.popup_close');

    for (let i = 0; i < phoneLinks.length; i++) {
        phoneLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            showPopupModal();
        });
    }

    // Открытие модального окна popup через 60 сек.
    document.addEventListener('readystatechange', function() {
        setTimeout(showPopupModal, 60000);
    });

    const showPopupModal = () => {
        popupOverlay.style.display = 'block';
    };

    // Закрытие модального окна по клику на overlay
    popupOverlay.addEventListener('click', function(event) {
        let target = event.target;
        if (target == popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    // Закрытие модального окна по клику на крестик
    popupClose.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });

    //Ввод только цифр в input с телефоном
    let telInputs = document.getElementsByName('user_phone');

    for (let i = 0; i < telInputs.length; i++) {
        telInputs[i].addEventListener('input', function() {
            telInputs[i].value = telInputs[i].value.replace(/[^0-9]/g, '');
        });
    }

    //Отправка
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let statusMessage = document.createElement('div'),
        body = document.querySelector('body');

    let obj = {};

    const requestData = (target) => {
        let input = target.getElementsByTagName('input');
        target.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(target);

        if (obj) {
            for (let key in obj) {
                formData.append(key, obj[key]);
            }
        }

        // formData.forEach(function(value, key) {
        //     obj[key] = value;
        // });

        // let json = JSON.stringify(obj);
        request.send(formData);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let j = 0; j < input.length; j++) {
            input[j].value = '';
        }        
    };

    body.addEventListener('submit', function(event) {
        event.preventDefault();        
        let target = event.target;
        
        if (target.classList = 'form') {
            requestData(target);
            obj = {};
        } else {
            return target;
        }
    });

    //Calc
    let calcBtn = document.getElementsByClassName('popup_calc_btn'),
        calcOverlay = document.querySelector('.popup_calc'),
        calcClose = document.querySelector('.popup_calc_close'),
        calcInputs = calcOverlay.querySelectorAll('.form-control');

    //Валидатор для высоты и ширины
    for (let i = 0; i < calcInputs.length; i++) {
        calcInputs[i].addEventListener('input', function() {
            calcInputs[i].value = calcInputs[i].value.replace(/[^0-9]/g, '');
        });
    }    

    //Открытие popup_calc нажатием на кнопку "Начать расчет"
    for (let i = 0; i < calcBtn.length; i++) {
        // console.log(calcBtn[i]);
        calcBtn[i].addEventListener('click', function() {
            calcOverlay.style.display = 'block';
        });
    }

    //Закрытие popup_calc нажатием на крестик
    calcClose.addEventListener('click', function() {
        calcOverlay.style.display = 'none';
        obj = {};
        
        for (let i = 0; i < calcInputs.length; i++) {
            calcInputs[i].value = '';
        }
    });

    //Выбор окон
        //popup_calc
        let calcTabBlock = document.querySelector('.balcon_icons'),
            calcTab = calcTabBlock.getElementsByTagName('a'),
            calcContentBlock = document.querySelector('.big_img'),
            calcContent = calcContentBlock.getElementsByTagName('img');

        const hideCalcContent = a => {
            for (let j = a; j < calcTab.length; j++) {
                calcTab[j].firstElementChild.style.width = '20%';
            }
            for (let i = a; i < calcContent.length; i++) {
                calcContent[i].style.display = 'none';
            }
        };
        hideCalcContent(1);

        const showCalcContent = b => {
            if (calcTab[b].firstElementChild.style.width == '20%') {
                calcTab[b].firstElementChild.style.width = '30%';
            }
            if (calcContent[b].style.display == 'none') {
                calcContent[b].style.display = 'inline-block';
            }
        };    

        let choosenTab = calcTab[0];
        for (let i = 0; i < calcTab.length; i++) {
            calcTab[i].addEventListener('click', function() {
                hideCalcContent(0);
                showCalcContent(i);
                choosenTab = calcTab[i];
            });
        }

    //popup_calc_profile
    let calcBtnNext = document.querySelector('.popup_calc_button'),
        calcProfileOverlay = document.querySelector('.popup_calc_profile'),
        calcProfileClose = document.querySelector('.popup_calc_profile_close'),
        userWidth = document.getElementById('width'),
        userHiegth = document.getElementById('height');

        //Список
        let optionBlock = document.getElementById('view_type');
        // obj.Option = optionBlock.value;

        optionBlock.addEventListener('input', function() {
            obj.Option =  this.options[this.selectedIndex].value;
        });

        //Чекбокс
        let checkBoxes = document.getElementsByName('checkbox-test');

        //Выбор только одного чекбокса
        body.addEventListener('input', function(e) {
            e.preventDefault();
            if (checkBoxes[0].checked == true) {
                checkBoxes[1].disabled = true;
            } else {
                checkBoxes[1].disabled = false;
            }
            if (checkBoxes[1].checked == true) {
                checkBoxes[0].disabled = true;
            } else {
                checkBoxes[0].disabled = false;
            }
        });

        for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].addEventListener('input', function() {
                obj.Temp = checkBoxes[i].nextElementSibling.id;
            });
        }


    calcBtnNext.addEventListener('click', function() {
        if (calcInputs[0].value != '' && calcInputs[1].value != '') {
            calcOverlay.style.display = 'none';
            calcProfileOverlay.style.display = 'block';
            obj.width = userWidth.value;
            obj.heigth = userHiegth.value;
            obj.windowType = choosenTab.classList;
            // obj.viewType = choosenOption;
        }
    });

    //Закрытие popup_calc_profile на крестик
    calcProfileClose.addEventListener('click', function() {
        calcProfileOverlay.style.display = 'none';
        obj = {};
        for (let i = 0; i < calcInputs.length; i++) {
            calcInputs[i].value = '';
        }
        for (let j = 0; j < checkBoxes.length; j++) {
            checkBoxes[j].checked = false;
        }
    });

    // popup_calc_end
    let calcPofileBtnNext = document.querySelector('.popup_calc_profile_button'),
        calcEndOverlay = document.querySelector('.popup_calc_end'),
        calcBtnEnd = document.querySelector('.popup_calc_end_close');

    calcPofileBtnNext.addEventListener('click', function() {
        if (checkBoxes[0].checked == true || checkBoxes[1].checked == true) {
            calcProfileOverlay.style.display = 'none';
            calcEndOverlay.style.display = 'block';
            }
    });

    //Закрытие popup_calc_end на крестик
    calcBtnEnd.addEventListener('click', function(target) {
        calcEndOverlay.style.display = 'none';
        obj = {};
        for (let i = 0; i < calcInputs.length; i++) {
            calcInputs[i].value = '';
        }
        for (let j = 0; j < checkBoxes.length; j++) {
            checkBoxes[j].checked = false;
        }

    });
}

export default modals;