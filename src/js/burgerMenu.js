const sideBar = document.querySelector('.sideBar');
const asideMenu = sideBar.querySelector('.asideMenu');
const closeBtn = sideBar.querySelector('.btn__close');
const menuBtn = document.querySelector('.btn__menu');

function closeBlur (e) {
  if( e.target == sideBar && e.target != asideMenu) {
    asideMenu.style.left = '-350px';
    sideBar.style.visibility = 'hidden';
  }
}
function openMenu() {
  sideBar.style.visibility = 'visible';
  asideMenu.style.left = 0;
}
function closeMenu() {
  asideMenu.style.left = '-350px';
  sideBar.style.visibility = 'hidden';
}
if(window.innerWidth < 1386) {
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  sideBar.addEventListener('click', closeBlur);
} else {
  openMenu();
  sideBar.removeEventListener('click', closeBlur);
}

window.addEventListener('resize', (e)=> {
  if (e.target.innerWidth >= 1386) {
    openMenu();
    sideBar.removeEventListener('click', closeBlur);
  } else {
    closeMenu();
    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    sideBar.addEventListener('click', closeBlur);
  }
}, true);
