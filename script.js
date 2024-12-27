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