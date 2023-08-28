const swiper = new Swiper('.swiper',{
  // オプション
  loop: true, //最後までいったら最初に戻る

  // ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination',
  },

  // ナビゲーションボタンの設定
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});