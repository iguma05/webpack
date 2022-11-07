const asideMenu = document.querySelector('.asideMenu');
const closeBtn = document.querySelector('.btn__close');
const menuBtn = document.querySelector('.btn__menu');

menuBtn.addEventListener('click', ()=> {
  asideMenu.style.left = 0;
});
closeBtn.addEventListener('click', ()=> {
  asideMenu.style.left = '-350px';
});
// window.addEventListener('click', (e)=> {
//   if(e.target == asideMenu) {
//     asideMenu.style.left = '-350px';
//   }
// });