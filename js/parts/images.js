function images() {
    let imageLinks = document.querySelectorAll('.image-link'),
        imageOverlay = document.createElement('div'),
        fullImg = document.createElement('img'),
        body = document.querySelector('body');

    for (let i = 0; i < imageLinks.length; i++) {
        imageLinks[i].addEventListener('click', (event) => {
            event.preventDefault();

            imageOverlay.classList.add('popup');
            imageOverlay.style.display = 'block';
            imageOverlay.appendChild(fullImg);

            fullImg.src = imageLinks[i].href;
            fullImg.classList.add('full-image');

            body.appendChild(imageOverlay);
        });
    }

    imageOverlay.addEventListener('click', function(event) {
        let target = event.target;
        if (target == imageOverlay) {
            body.removeChild(imageOverlay);
        }
    });
}

export default images;