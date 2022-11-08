const sideMessage = document.querySelector('.sideMessage');
const modalMessage = sideMessage.querySelector('.modalMessage');
const closeBtn = modalMessage.querySelector('.btn__close');
const chatBtn = document.querySelectorAll('.btn__chat');

chatBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    sideMessage.style.visibility = 'visible';
    modalMessage.style.right = '320px';
  });
});
closeBtn.addEventListener('click', ()=> {
  modalMessage.style.right = '-350px';
  sideMessage.style.visibility = 'hidden';
});
sideMessage.addEventListener('click', (e)=> {
  if (e.target == sideMessage && e.target != modalMessage) {    
    modalMessage.style.right = '-350px';
    sideMessage.style.visibility = 'hidden';
  }
});