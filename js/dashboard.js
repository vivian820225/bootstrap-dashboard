$(function() {
  // 側邊選單收放
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('mainMenu'),
    'padding': 248,
    'tolerance': 70
  });

  // Toggle button
  document.querySelector('#toggleBtn').addEventListener('click', function() {
    this.classList.toggle('rotate');
    slideout.toggle();
  });

  // 次選單收合
  $('.nav-link').on('click', function() {
    $(this).siblings('.sub-menu').slideToggle();
  });
});