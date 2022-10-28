import '../scss/style.scss';
import '../scss/nullstyle.scss';
import '../scss/header.scss';
import '../scss/title.scss';
import '../scss/slideMenu.scss';
import '../scss/content.scss';
import '../scss/brands.scss';
import './content'
import './brands'


console.log('Works!');


new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    slidesPerView: 1.3,
});
