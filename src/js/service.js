const services = document.querySelector('.service__items');
const seeServicesAll = document.querySelector('.service__more');


seeServicesAll.addEventListener('click', ()=> {
  services.classList.toggle('service__open');
    seeServicesAll.classList.toggle('rotate');
    if (seeServicesAll.textContent !== "Показать все") {
      seeServicesAll.textContent = "Показать все";
    } else {
      seeServicesAll.textContent ="Скрыть"
    }
});