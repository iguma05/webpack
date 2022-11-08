const sideBar = document.querySelector('.sideBar');
const asideMenu = sideBar.querySelector('.asideMenu');
const closeBtn = sideBar.querySelector('.btn__close');
const menuBtn = document.querySelector('.btn__menu');

menuBtn.addEventListener('click', ()=> {
  sideBar.style.visibility = 'visible';
  asideMenu.style.left = 0;
});
closeBtn.addEventListener('click', ()=> {
  asideMenu.style.left = '-350px';
  sideBar.style.visibility = 'hidden';
});
sideBar.addEventListener('click', (e)=> {
  if( e.target == sideBar && e.target != asideMenu) {
    asideMenu.style.left = '-350px';
    sideBar.style.visibility = 'hidden';
  }
});