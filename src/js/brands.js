const brands = document.querySelector('.brands__items');
const seeBrandsAll = document.querySelector('.brands__more');


seeBrandsAll.addEventListener('click', ()=> {
    brands.classList.toggle('brands__open');
    seeBrandsAll.classList.toggle('rotate');
    if (seeBrandsAll.textContent !== "Показать все") {
        seeBrandsAll.textContent = "Показать все";
    } else {
        seeBrandsAll.textContent ="Скрыть"
    }
});