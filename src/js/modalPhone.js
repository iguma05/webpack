const sidePhone = document.querySelector('.sidePhone');
const modalPhone = sidePhone.querySelector('.modalPhone');
const closeBtn = modalPhone.querySelector('.btn__close');
const phoneBtn = document.querySelectorAll('.btn__phone');

phoneBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    sidePhone.style.visibility = 'visible';
    modalPhone.style.right = 0;
  });
});
closeBtn.addEventListener('click', ()=> {
  modalPhone.style.right = '-1000px';
  sidePhone.style.visibility = 'hidden';
});
sidePhone.addEventListener('click', (e)=> {
  if(e.target !== modalPhone) {
    modalPhone.style.right = '-1000px';
    sidePhone.style.visibility = 'hidden';
  }
});