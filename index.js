
let lastScrollTop = 0;


const registerGSAPPlugins = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const initFullPageScroll = () => {
  $('#fullpage').fullpage({
    // autoScrolling: true,
    scrollHorizontally: true,
    normalScrollElements: '.swiper, .info, .section[data-anchor="cards"]',
    scrollingSpeed: 1700,
    verticalCentered: false,
    scrollBar: false,
    scrollOverflow: true,
    bigSectionsDestination: 'top',
    touchScroll: true
  });
}

const initSwiperSliders = () => {
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    slideToClickedSlide: true,
  });
  const _swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}



const initCardsScrollAnimation = () => {
  $('.fp-overflow').on('scroll', event => {
    const scroll = event.target.scrollTop;
    const clientHeight = window.innerHeight;
    const activeSection = Math.ceil(scroll / clientHeight) + 1;

    console.log(activeSection);

    if (scroll > lastScrollTop) {
      // downscroll code
      if (activeSection === 6) {
        fullpage_api.moveTo(4, 0);
      }
    } else if (scroll < lastScrollTop) {
      if (scroll === 0) {
        fullpage_api.moveTo(2, 0);
      }
    }
    lastScrollTop = scroll <= 0 ? 0 : scroll; // For Mobile or negative scrolling


    if (activeSection > 1) {
      $(`.card:nth-child(${activeSection})`).addClass('active');
    }

    if (activeSection >= 1) {
      $(`.card:nth-child(${activeSection})`).removeClass('inactive');
      $(`.card:nth-child(${activeSection + 1})`).removeClass('active');
    }

    const previousSections = $(`.card:nth-child(-n+${activeSection - 1})`);

    previousSections.each((_, element) => {
      $(element).addClass('inactive');
    });

  })

}

$(document).ready(function () {
  console.clear();

  initFullPageScroll();

  initSwiperSliders();

  registerGSAPPlugins();
  initCardsScrollAnimation();
});