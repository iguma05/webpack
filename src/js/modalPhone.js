const sidePhone = document.querySelector('.sidePhone');
const modalPhone = sidePhone.querySelector('.modalPhone');
const closeBtn = modalPhone.querySelector('.btn__close');
const phoneBtn = document.querySelectorAll('.btn__phone');
const body = document.querySelector('body');

phoneBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    sidePhone.classList.add('sidePhone_open');
    modalPhone.classList.add('modalPhone_open');
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  });
});
closeBtn.addEventListener('click', ()=> {
  sidePhone.classList.remove('sidePhone_open');
  modalPhone.classList.remove('modalPhone_open');
  body.style.height = '100%';
  body.style.overflowY = 'auto';
});
sidePhone.addEventListener('click', (e)=> {
  if(e.target == sidePhone && e.target !== modalPhone) {
    sidePhone.classList.remove('sidePhone_open');
    modalPhone.classList.remove('modalPhone_open');
    body.style.height = '100%';
    body.style.overflowY = 'auto';
  }
});