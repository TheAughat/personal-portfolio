var track = document.querySelector('.carousel__track');
var slides = Array.from(track.children);
var nextButton = document.querySelector('.carousel__button--right');
var prevButton = document.querySelector('.carousel__button--left');
var dotsNav = document.querySelector('.carousel__nav');
var dots = Array.from(dotsNav.children);

var slideWidth = slides[0].getBoundingClientRect().width;

var i = 0;  // autoplay start point
var images = [];
var time = 5000;
var pauseTime = 7000;
var movementCheck = true;

var setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);


var moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


var updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


function changeImg() {
    if (document.querySelector('.carousel__track') === null) {
        // delete track;
        // return;
        return;
    }
    else if (document.querySelector('.carousel__track').classList[1] === 'moving') {
        console.log(time);
        moveNext();

        if (i < slides.length - 1) {
            i++;
        }
        else {
            i = 0;
        }

        setTimeout("changeImg()", time);
    }
}

window.onload = setTimeout("changeImg()", time);


function stopMovement() {
    movementCheck = true;
    document.querySelector('.carousel__track').classList.add('not-moving');
    document.querySelector('.carousel__track').classList.remove('moving');

    setTimeout("startMovement()", pauseTime);
}


function startMovement() {
    if (movementCheck) {
        document.querySelector('.carousel__track').classList.add('moving');
        document.querySelector('.carousel__track').classList.remove('not-moving');
        movementCheck = false;
        changeImg()
    }
}


//on click left, move slides to the left
prevButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var prevSlide = currentSlide.previousElementSibling;
    stopMovement();
    if (prevSlide !== null) {

        var currentDot = dotsNav.querySelector('.current-slide');
        var prevDot = currentDot.previousElementSibling;

        moveToSlide(track, currentSlide, prevSlide);

        updateDots(currentDot, prevDot);
    }
    else {
        moveToEnds(document.getElementsByClassName('carousel__indicator')[slides.length - 1]);
    }
})


//on click right, move slides to the right
nextButton.addEventListener('click', btnMoveNext)

function btnMoveNext() {
    stopMovement();
    moveNext();
}

function moveNext() {
    var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    
    if (nextSlide !== null) {

        var currentDot = dotsNav.querySelector('.current-slide');
        var nextDot = currentDot.nextElementSibling;

        moveToSlide(track, currentSlide, nextSlide);

        updateDots(currentDot, nextDot);
    }
    else {
        moveToEnds(document.getElementsByClassName('carousel__indicator')[0]);
    }
}


//on click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // which indicator was clicked on?
    var targetDot = e.target.closest('button');

    if (!targetDot) return;
    stopMovement();

    var currentSlide = track.querySelector('.current-slide');
    var currentDot = dotsNav.querySelector('.current-slide');
    var targetIndex = dots.findIndex(dot => dot === targetDot);
    var targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
})


function moveToEnds(targetDot) {
    if (!targetDot) return;

    var currentSlide = track.querySelector('.current-slide');
    var currentDot = dotsNav.querySelector('.current-slide');
    var targetIndex = dots.findIndex(dot => dot === targetDot);
    var targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
}