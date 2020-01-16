function tabs() {

    //Табы с отделкой
    let tab = document.querySelectorAll('.decoration-link'),
        tabBlock = document.querySelectorAll('.decoration_item'),
        info = document.querySelectorAll('.no_click'),
        tabContent = document.querySelectorAll('.tabcontent'),
        body = document.querySelector('body');

    const hideTabContent = a => {
        for (let i = a; i < tab.length; i++) {
            tab[i].style.color = '#000000';
        }

        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            info[i].classList.remove('after_click');
        }
    };
    hideTabContent(1);

    const showTabContent = b => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            // tab[b].style.color = '#0089cd';
        }
        if (!(info[b].classList.contains('after_click'))) {
            info[b].classList.add('after_click');
        }
        if (tab[b].style.color = '#000000') {
            tab[b].style.color = '#0089cd';
        } else {
            tab[b].style.color = '#000000';
        }
    };

    for (let i = 0; i < info.length; i++) {
        info[i].addEventListener('click', (event) => {
            let target = event.target;
            if (target && target.classList.contains('decoration-link')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('no_click')) {

            for (let i = 0; i < info.length; i++) {
                if (target == info[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Табы с окнами
    let glazingTab = document.querySelectorAll('.glazing-link'),
        glazingBlock = document.querySelectorAll('.glazing_block'),
        glazingImg = document.querySelectorAll('.glazing-image'),
        glazingTabContent = document.querySelectorAll('.glazing-tabcontent');

    const hideGlazingTabContent = a => {
        for (let i = a; i < glazingTabContent.length; i++) {
            glazingTabContent[i].classList.remove('show');
            glazingTabContent[i].classList.add('hide');
            glazingTab[i].classList.remove('active');
        }
    };
    hideTabContent(1);

    const showGlazingTabContent = b => {
        if (glazingTabContent[b].classList.contains('hide')) {
            glazingTabContent[b].classList.remove('hide');
            glazingTabContent[b].classList.add('show');
        }
        if (!(glazingTab[b].classList.contains('active'))) {
            glazingTab[b].classList.add('active');
        }
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target || target.classList.contains('glazing-link')) {
            for (let i = 0; i < glazingTab.length; i++) {
                if (target == glazingTab[i]) {
                    hideGlazingTabContent(0);
                    showGlazingTabContent(i);
                    break;
                }
            }
        }
    });

    body.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.classList.contains('glazing-image')) {
            for (let j = 0; j < glazingImg.length; j++) {
                if (target == glazingImg[j]) {
                    hideGlazingTabContent(0);
                    showGlazingTabContent(j);
                    break;
                }
            }
        }
    });

    body.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.classList.contains('glazing_block')) {
            for (let k = 0; k < glazingBlock.length; k++) {
                if (target == glazingBlock[k]) {
                    hideGlazingTabContent(0);
                    showGlazingTabContent(k);
                    break;
                }
            }
        }
    });

}

export default tabs;