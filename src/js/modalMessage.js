const modalMessage = document.querySelector('.modalMessage');
const closeBtn = modalMessage.querySelector('.btn__close');
const chatBtn = document.querySelectorAll('.btn__chat');

chatBtn.forEach(item=> {
  item.addEventListener('click', ()=> {
    modalMessage.style.right = 0;
  });
})

closeBtn.addEventListener('click', ()=> {
  modalMessage.style.right = '-1000px';
});