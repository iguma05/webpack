const sidePhone = document.querySelector('.sidePhone');
const modalPhone = sidePhone.querySelector('.modalPhone');
const closeBtn = modalPhone.querySelector('.btn__close');
const phoneBtn = document.querySelectorAll('.btn__phone');

phoneBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    sidePhone.classList.add('sidePhone_open');
    modalPhone.classList.add('modalPhone_open');
  });
});
closeBtn.addEventListener('click', ()=> {
  sidePhone.classList.remove('sidePhone_open');
  modalPhone.classList.remove('modalPhone_open');
});
sidePhone.addEventListener('click', (e)=> {
  if(e.target == sidePhone && e.target !== modalPhone) {
    sidePhone.classList.remove('sidePhone_open');
    modalPhone.classList.remove('modalPhone_open');
  }
});