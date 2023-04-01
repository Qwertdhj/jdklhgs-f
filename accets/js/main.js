 let menuElem = document.getElementById('sweeties');
    let titleElem = menuElem.querySelector('.line_button');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };

