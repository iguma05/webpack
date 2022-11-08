const sidePhone = document.querySelector('.sidePhone');
const modalPhone = sidePhone.querySelector('.modalPhone');
const closeBtn = modalPhone.querySelector('.btn__close');
const phoneBtn = document.querySelectorAll('.btn__phone');

phoneBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    sidePhone.style.visibility = 'visible';
    modalPhone.style.right = '320px';
  });
});
closeBtn.addEventListener('click', ()=> {
  modalPhone.style.right = '-350px';
  sidePhone.style.visibility = 'hidden';
});
sidePhone.addEventListener('click', (e)=> {
  if(e.target == sidePhone && e.target !== modalPhone) {
    modalPhone.style.right = '-350px';
    sidePhone.style.visibility = 'hidden';
  }
});