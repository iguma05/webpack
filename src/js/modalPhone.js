const modalPhone = document.querySelector('.modalPhone');
const closeBtn = modalPhone.querySelector('.btn__close');
const phoneBtn = document.querySelectorAll('.btn__phone');

phoneBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    modalPhone.style.right = 0;
  });
})

closeBtn.addEventListener('click', ()=> {
  modalPhone.style.right = '-1000px';
});