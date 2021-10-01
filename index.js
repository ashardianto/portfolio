const menuToggle = document.querySelector('.nav button');
const nav = document.querySelector('.nav-list');
let heading = document.getElementById('heading');
let thirdHeading = document.getElementById('third-heading');
let subHeading = document.getElementById('sub-heading');
let aboutImage = document.getElementById('about-image');
let contentPar = document.getElementById('content-par');
let flower4 = document.getElementById('.flower4')
let flower3 = document.getElementById('.flower3')
let flower1 = document.getElementById('.flower1')
let bird = document.getElementById('.bird')

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('nav-listdd');
})

window.addEventListener('scroll', headingEffect);

function headingEffect() {
    
    if (window.scrollY >= 300) {
        heading.style.opacity = '0';
        thirdHeading.style.opacity = '0';       
        heading.style.transition = '1s ease-in-out';
        thirdHeading.style.transition = '1s ease-in-out';
        heading.style.transform = 'translateX(-200px)'
        thirdHeading.style.transform = 'translateX(200px)'
    } else {
        heading.style.opacity = '1';
        thirdHeading.style.opacity = '1';
        heading.style.transform = 'translateX(0px)'
        thirdHeading.style.transform = 'translateX(0px)'
    }
    // heading.style.marginRight = value * 5 + 'px';
    // thirdHeading.style.marginLeft = value * 5 + 'px';      
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