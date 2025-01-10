const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

/*check if the navbar is open*/

/*To activate the bar*/
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

/*To close the navigation bar*/
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// sproduct page
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

/*Understand the function*/
/*if you click the small image it replaces the main iage*/
smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}