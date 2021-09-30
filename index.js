const menuToggle = document.querySelector('.nav button');
const nav = document.querySelector('.nav-list');
let heading = document.getElementById('heading');
let thirdHeading = document.getElementById('third-heading');
let subHeading = document.getElementById('sub-heading');
let aboutImage = document.getElementById('about-image');
let contentPar = document.getElementById('content-par');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('nav-listdd');
})

window.addEventListener('scroll', headingEffect);

function headingEffect() {
    if (window.scrollY >= 200) {
        heading.style.opacity = '0';
        thirdHeading.style.opacity = '0';       
        heading.style.transition = '1s ease-in-out';
        thirdHeading.style.transition = '1s ease-in-out';
    } else {
        heading.style.opacity = '1';
        thirdHeading.style.opacity = '1';
    }

    let value = window.scrollY;
    heading.style.marginRight = value * 5 + 'px';
    thirdHeading.style.marginLeft = value * 5 + 'px';
}

window.addEventListener('scroll', aboutEffect);

function aboutEffect() {
    if (window.scrollY >= 300) {
        subHeading.style.opacity = '1';
        subHeading.style.transform = 'translateX(0px)';
        subHeading.style.transition = '0.5s ease-in-out';
        contentPar.style.opacity = '1';
        contentPar.style.transform = 'translateX(0px)';
        contentPar.style.transition = '1s ease-in-out';
        aboutImage.style.opacity = '1';
        aboutImage.style.transform = 'translateX(0px)';
        aboutImage.style.transition = '0.5s ease-in-out';
    } else {
        subHeading.style.opacity = '0';
        subHeading.style.transform = 'translateX(-50px)';
        contentPar.style.opacity = '0';
        contentPar.style.transform = 'translateX(-80px)';
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(50px)';
    }
}