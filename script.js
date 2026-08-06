// FAQ accordion — only one item open at a time
document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  const icon = item.querySelector('.faq-icon');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach((openItem) => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-icon').src = 'assets/icon_plus.svg';
    });

    if (!isOpen) {
      item.classList.add('open');
      icon.src = 'assets/icon_minus.svg';
    }
  });
});

// Certificate Carousel using Swiper (LTR direction)
if (document.querySelector('.cert-swiper')) {
  new Swiper('.cert-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
      el: '.cert-pagination',
      clickable: true,
    },
  });
}

// Reviews Carousel using Swiper (RTL — matches page direction)
if (document.querySelector('.review-swiper')) {
  new Swiper('.review-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
      el: '.review-pagination',
      clickable: true,
    },
  });
}

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  });
}
