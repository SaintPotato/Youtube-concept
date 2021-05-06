const channelSlider = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4, 
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const recommendationsSlider = new Swiper('.recommendations-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommendations-button-next',
    prevEl: '.recommendations-button-prev',
  },
});

const recommendedChannelSlider = new Swiper('.recommended-channel-slider', {
    loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4, 
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-channel-button-next',
    prevEl: '.recommended-channel-button-prev',
  },
});

const seartchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
seartchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  channelSlider.destroy();
  recommendationsSlider.destroy();
  recommendedChannelSlider.destroy();
}