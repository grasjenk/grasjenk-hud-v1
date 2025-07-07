$(document).ready(function() {
  let prog = false;

  $('.stats').fadeIn(500);

  window.addEventListener('message', function(event) {
    let action = event.data.action;

    if (action === 'updateHud') {
      updateProgressBar(event.data.health, $('.health'));
      updateProgressBar(event.data.armor, $('.armor'));

      let voice = getVoicePercentage(event.data.voice);
      let gradientColor = event.data.talking ? '#cc0000' : '#ff0000';
      updateProgressBar(voice, $('.voice'), gradientColor);

    } else if (action === 'ScrollHide') {
      let toggle = event.data.toggle ? { bottom: '-10%' } : { bottom: '1%' };
      animateElement('.stats', toggle, 500);
    }
  });
});

const updateProgressBar = (value, element, color = '#cc0000') => {
  element.css('background', `linear-gradient(to top, ${color} ${value}%, #595959 0%)`);
  element.css('-webkit-text-fill-color', 'transparent');
  element.css('-webkit-background-clip', 'text');
};

const getVoicePercentage = (voice) => {
  let percentage = 0;

  if (voice === 1.5) {
    percentage = 40;
  } else if (voice === 6.0) {
    percentage = 60;
  } else if (voice === 15.0) {
    percentage = 100;
  }

  return percentage;
};




