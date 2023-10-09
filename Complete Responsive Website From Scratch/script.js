var slide_show = document.querySelector('#slideShow');
var slide = slide_show.getElementsByTagName('img');
var count = 0;
function nextSlide(){
    slide[count].classList.remove('active');
    count = (count + 1) % slide.length;
    slide[count].classList.add('active');
}
function previousSlide(){
    slide[count].classList.remove('active');
    count = (count - 1 + slide.length) % slide.length ;
    slide[count].classList.add('active');
}

// slide show text

var slide_show_text = document.querySelector('#slideShowText');
var slide_text = slide_show_text.getElementsByTagName('div');
var i = 0;
function nextSlideText(){
    slide_text[i].classList.remove('active');
    i = (i + 1) % slide_text.length;
    slide_text[i].classList.add('active');
}
function previousSlideText(){
    slide_text[i].classList.remove('active');
    i = (i - 1 + slide_text.length) % slide_text.length ;
    slide_text[i].classList.add('active');
}
function menu(){
    var nav = document.querySelector('#navbar');
nav.classList.toggle('active');
}