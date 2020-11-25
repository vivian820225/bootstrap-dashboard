$(function() {
  // 側邊選單收放
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('mainMenu'),
    'padding': 248,
    'tolerance': 70
  });

  // Toggle button
  var fixedHeader = document.getElementById('stickyHeader');
  var toggleBtn = document.querySelector('#toggleBtn');
  
  toggleBtn.addEventListener('click', function() {
    this.classList.toggle('rotate');
    slideout.toggle();
  });

  if (!slideout.isOpen()) {
    toggleBtn.classList.remove('rotate');
  }

  slideout.on('translate', function(translated) {
    fixedHeader.style.transform = 'translateX(' + translated + 'px)';
  });
  
  slideout.on('beforeopen', function () {
    fixedHeader.style.transition = 'transform 300ms ease';
    fixedHeader.style.transform = 'translateX(248px)';
  });
  
  slideout.on('beforeclose', function () {
    fixedHeader.style.transition = 'transform 300ms ease';
    fixedHeader.style.transform = 'translateX(0px)';
  });
  
  slideout.on('open', function () {
    fixedHeader.style.transition = '';
  });
  
  slideout.on('close', function () {
    fixedHeader.style.transition = '';
  });

  // 次選單收合
  $('.nav-link').on('click', function() {
    $(this).siblings('.sub-menu').slideToggle();
  });
});