"use strict";

{
  // 下側のギャラリー
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10, // 画像同士の距離
    slidesPerView: 5, // 一つの画面で表示する数
    loop: true,
    loopedSlides: 5, // loopがtrueなので同時に設定
    freeMode: false, // スワイプした時、画像が固定位置に
    watchSlidesVisibility: true, // 原則true。補足1。
    watchSlidesProgress: true, // 原則true。補足1。

    // 補足1。スライドにswiper-slide-visibleのクラスが追加される。
    //        今回はたぶん関係なし。
  });
  
  // 上側のギャラリー
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: { // たぶん左右のボタンの設定
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 下側のギャラリーと連動するように。たぶん
    thumbs: { 
      swiper: galleryThumbs,
    },
    
    // 自動再生
    autoplay: { 
      delay: 2500, // 2500ミリ秒ごと
      disableOnInteraction: false 
      // ユーザがスライドに触っても自動再生が続くように
    },
  });
  

}