import ready from 'Utils/documentReady.js';

ready(function () {
  const facesGrid = document.getElementById('faces-grid');
  const containerFaces = document.getElementById('containerFaces');
  let prevScrollPosition = 0;

  const containerHidden = isHidden(containerFaces);

  !containerHidden ? addScrollableBlock() : null;

  function addScrollableBlock() {
    document.addEventListener('scroll', function (event) {
      var course = window.scrollY;

      if (course < prevScrollPosition) {
        scrollBlock(facesGrid, true);
      } else {
        scrollBlock(facesGrid);
      }
      prevScrollPosition = course;
    });
  };

  function scrollBlock(element, toRight) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);

    if (matrix.m41 > 0) {
      element.style.transform = `translateX(-300px)`
      return;
    }

    if ((-matrix.m41 + 300) > element.offsetWidth) {
      element.style.transform = `translateX(-${element.offsetWidth -500}px)`
      return;
    }

    toRight ? (
      element.style.transform = `translateX(${matrix.m41 + 4}px)`
    ) : (
      element.style.transform = `translateX(${matrix.m41 - 4}px)`
    )
  }

  function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
  }
});
