'use strict';

// グローバルナビゲーション
const gMenuP = document.querySelector('header p');
const gMenuArea = document.querySelector('header nav');

gMenuP.addEventListener('click', () => {
  gMenuArea.classList.toggle('hidden');
  gMenuP.classList.toggle('active');
});

const gMenuAreaList = document.querySelectorAll('header nav li');

gMenuAreaList.forEach(List => {
  List.addEventListener('click', () => {
    gMenuArea.classList.remove('hidden');
    gMenuP.classList.remove('active');
  });
});

// ギャラリー
$('#gallery-area').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,

  responsive: [{
    breakpoint: 800, // ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  ]
});

// header画面表示
function load_fade() {
  const element = document.getElementsByClassName('load-fade');
  if (!element) return;

  for (let i = 0; i < element.length; i++) {
    element[i].classList.add('is-show');
  }
}
setTimeout(load_fade, 400);

// メイン、フッター画面表示
function scroll_effect() {
  const element = document.getElementsByClassName('scroll-up');
  if (!element) return;

  let scrollY = window.pageXOffset;
  let windowH = window.innerHeight;
  let showTiming = 200;
  for (let i = 0; i < element.length; i++) {
    let elementClientRect = element[i].getBoundingClientRect();
    let elemY = scrollY + elementClientRect.top;
    if (scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect);
