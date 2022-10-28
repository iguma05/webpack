const more = document.querySelector('.content__more');
const text = document.querySelector('.text');

more.addEventListener('click', ()=> {
    text.classList.toggle('open');
    more.classList.toggle('rotate');
    if(more.textContent !== "Свернуть") {
        more.textContent = "Свернуть";
    } else {
        more.textContent = "Читать далее";
    }
});
