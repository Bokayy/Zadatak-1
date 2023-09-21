let hero = document.getElementsByClassName("hero");
console.log(hero);

function waitForPageToLoad() {
    return new Promise((resolve) => {
      if (document.readyState === 'complete') {
        // If the document is already in a complete state, resolve the Promise immediately.
        resolve();
      } else {
        // Otherwise, set up an event listener for window.onload to resolve the Promise.
        window.onload = resolve;
      }
    });
  }

  async function changeBackgroundImage() {
    await waitForPageToLoad();
    let iterator = 0;
    const imageFilenames = ['1.png', '2.png', '3.png']; // Add all your image filenames here
  
    function updateBackgroundImage() {
      hero[0].style.backgroundImage = `url(${window.origin}/assets/${imageFilenames[iterator]})`;
      iterator = (iterator + 1) % imageFilenames.length; // Reset iterator to 0 when it reaches the end
    }
  
    // Call updateBackgroundImage immediately and then at intervals
    updateBackgroundImage();
    setInterval(updateBackgroundImage, 5000); // Change image every 3 seconds
  }
  
  changeBackgroundImage();
    
