import ready from 'Utils/documentReady.js';

ready(function () {
  const openSidebar = document.getElementById('openSidebar');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');

  openSidebar.addEventListener('click', function (event) {
    sidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeSidebar.addEventListener('click', function (event) {
    sidebar.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
});
