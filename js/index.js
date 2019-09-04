// Your code goes here

//breaking down html into universal queries:

//header breakdown
const mainNavigation = document.querySelector('.main-navigation');
const navContainer = document.querySelectorAll('.nav-link');
const navLogo = document.querySelector('.container nav-container h1');

//home breakdown
const homeDiv = document.querySelector('.container home');
const bodySection = document.querySelector('body');
const busImg = document.querySelector('.intro img');
const htmlItems = document.querySelector('html');
const otherImgs = document.querySelectorAll('img');
const h2 = document.querySelectorAll('h2');
const pDivs = document.querySelectorAll('p');
const allButtons = document.querySelectorAll('.btn');
const footerSect = document.querySelectorAll('.footer');


//mouseover event
mainNavigation.addEventListener("mouseover", event => {
    mainNavigation.style.backgroundColor = "silver";
    event.stopPropagation();
});

//mouseleave event
mainNavigation.addEventListener("mouseout", event => {
    mainNavigation.style.backgroundColor = "white";
    event.stopPropagation();
});

//keydown event
document.addEventListener('keydown', logKey)

function logKey() {
    console.log('key was pressed')
}

//drag / drop event
document.addEventListener('drag', event => {
    bodySection.style.backgroundColor = 'purple';
})

//offline event
window.addEventListener('offline', event => {
    alert(`Check your internet connection!`);
})

//focus event
pDivs.forEach(function(element) {
    element.tabIndex = 1;
    element.addEventListener('focus', event => {
        event.target.style.backgroundColor = 'yellow';
    });

    element.addEventListener('blur', event => {
        event.target.style.background = '';
    });
});

//load event
otherImgs.forEach(item => item.addEventListener('load', event => {
    event.target.style.border = '3px groove red';
}))


//resize event
window.addEventListener('resize', event => {
    alert(`You have resized the window.`);
})


//scroll event
window.addEventListener('scroll', event => {
    console.log("You are scrolling!");
})

//click event
allButtons.forEach(item => item.addEventListener('click', event => {
    event.target.style.backgroundColor = "orange";
}))

//dblclick event
otherImgs.forEach(item => item.addEventListener('dblclick', event => {
    event.target.style.border = '1px solid green';
}))

//stretch - adding greensock animation