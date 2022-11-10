const sideMessage = document.querySelector('.sideMessage');
const modalMessage = sideMessage.querySelector('.modalMessage');
const closeBtn = modalMessage.querySelector('.btn__close');
const chatBtn = document.querySelectorAll('.btn__chat');

chatBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    modalMessage.classList.add('modalMessage_open');
    sideMessage.classList.add('sideMessage_open');
  });
});
closeBtn.addEventListener('click', ()=> {
  modalMessage.classList.remove('modalMessage_open');
  sideMessage.classList.remove('sideMessage_open');
});
sideMessage.addEventListener('click', (e)=> {
  if (e.target == sideMessage && e.target != modalMessage) { 
    console.log(e.target);   
    modalMessage.classList.remove('modalMessage_open');
    sideMessage.classList.remove('sideMessage_open');
  }
});