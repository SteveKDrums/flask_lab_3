// animations.js

// Animate the header element
anime({
    targets: 'header',
    translateY: [-100, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000,
  });
  
  // Add more animations for other elements as needed

  // animations.js

// Fade in an element
function fadeIn(element) {
    anime({
      targets: element,
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }
  
  // Slide in an element from the left
  function slideInFromLeft(element) {
    anime({
      targets: element,
      translateX: ['-100%', 0],
      duration: 1000,
      easing: 'easeOutExpo'
    });
  }
  
  // Scale an element
  function scaleElement(element) {
    anime({
      targets: element,
      scale: [0, 1],
      duration: 1000,
      easing: 'easeInOutBack'
    });
  }
  
  // Invoke the animations based on the current HTML file
  document.addEventListener('DOMContentLoaded', function () {
    const currentHTML = document.getElementsByTagName('title')[0].innerText.toLowerCase();
    
    if (currentHTML.includes('index')) {
      const elementToFadeIn = document.querySelector('.fade-in-element-index');
      fadeIn(elementToFadeIn);
    } else if (currentHTML.includes('task list')) {
      const elementToSlideIn = document.querySelector('.slide-in-element-task-list');
      slideInFromLeft(elementToSlideIn);
    } else if (currentHTML.includes('delete task')) {
      const elementToScale = document.querySelector('.scale-element-delete-task');
      scaleElement(elementToScale);
    } else if (currentHTML.includes('add task')) {
      const elementToFadeIn = document.querySelector('.fade-in-element-add-task');
      const elementToSlideIn = document.querySelector('.slide-in-element-add-task');
      fadeIn(elementToFadeIn);
      slideInFromLeft(elementToSlideIn);
    }
  });
  
  