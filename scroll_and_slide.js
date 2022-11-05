/*window.addEventListener('scroll', () => {
    document.getElementById("who");

    if(window.scrollY > 501) {
        who.style.position = "fixed";
    }
    else if(window.scrollY < 100) {
        who.style.position = "relative";
    }
}); */

/* Slide Effects */
let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 3000)


   
/* Deploiement Text Effect */
function deploiement1(id) {
    txt = "textJS" + id;
    var el = document.getElementById(txt)

    if (el.style.display=="block") {
        el.style.display="none";
    }else{
        el.style.display="block";
    }
}

