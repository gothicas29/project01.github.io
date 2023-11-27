const swiper = new Swiper('.swiper-container', {
    // цикличность
    loop: true,
  
    //Пагианция


    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}',
    }

  });

  