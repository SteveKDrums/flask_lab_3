// Randomly change the background color of the body
function changeBackgroundColor() {
    const colors = ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40', '#0074D9', '#B10DC9'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  // Add event listener to the header for changing background color
  const header = document.querySelector('header');
  header.addEventListener('click', changeBackgroundColor);
  
  // Show a greeting message
  function showGreetingMessage() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting = '';
    
    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
    
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = `${greeting}!`
    
    const container = document.querySelector('.container');
    container.insertBefore(greetingElement, container.firstChild);
  }
  
  // Invoke the greeting message function
  showGreetingMessage();
    