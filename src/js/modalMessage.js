const sideMessage = document.querySelector('.sideMessage');
const modalMessage = sideMessage.querySelector('.modalMessage');
const closeBtn = modalMessage.querySelector('.btn__close');
const chatBtn = document.querySelectorAll('.btn__chat');
const body = document.querySelector('body');

chatBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    modalMessage.classList.add('modalMessage_open');
    sideMessage.classList.add('sideMessage_open');
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  });
});
closeBtn.addEventListener('click', ()=> {
  modalMessage.classList.remove('modalMessage_open');
  sideMessage.classList.remove('sideMessage_open');
  body.style.height = '100%';
  body.style.overflowY = 'auto';
});
sideMessage.addEventListener('click', (e)=> {
  if (e.target == sideMessage && e.target != modalMessage) { 
    console.log(e.target);   
    modalMessage.classList.remove('modalMessage_open');
    sideMessage.classList.remove('sideMessage_open');
    body.style.height = '100%';
    body.style.overflowY = 'auto';
  }
});