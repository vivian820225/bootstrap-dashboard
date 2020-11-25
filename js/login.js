$(document).ready(function() {
  // 登入區塊反轉
  $('.form-wrapper [data-toggle="flip"]').click(function() {
    $(".form-wrapper").toggleClass("flipped");
    return false;
  });
});