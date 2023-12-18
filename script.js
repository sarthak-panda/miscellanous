var swiper=new Swiper(".slide-content",{
    // slidesPerView:3,
    spaceBetween:25,
    // loop:true,
    centerSlides:'true',
    fade:'true',
    grabCursor:'true',
    effect:"coverflow",
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:0,
        strech:0,
        depth:300,
        modifier:1,
        slideShadows:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    // breakpoints:{
    //     0:{
    //         slidesPerView: 1,
    //     },
    //     520:{
    //         slidesPerView: 2,
    //     },
    //     950:{
    //         slidesPerView: 3,
    //     },
    // }
});