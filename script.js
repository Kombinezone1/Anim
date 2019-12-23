window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const voices = document.querySelectorAll(".voices div");


  // lets get going with the sound there
  voices.forEach((voice, index) =>{
   voice.addEventListener('click', function() {
    sounds[index].currentTime = 0; 
    sounds[index].play();

   });
  });
});



