// Display local time, greeting, and message and update continuously.

// Set variables
const objectIndex = Math.floor((Math.random() * 7));
console.log(objectIndex);
const cssFormat = formats[objectIndex];
const elTime = document.getElementById('time'),
      elGreeting = document.getElementById('greeting'),
      elMessage = document.getElementById('msg'),
      elHeader = document.querySelector('header');


// Default greetings messages
const h = new Date().getHours();
changeCSS(cssFormat);
updateGreeting(h);

const myTime = setInterval(myClock,1000),
      myGreeting = setInterval(myGreet,3600000);

// Dynamic clock display
function myClock(){
  const d = new Date();
  elTime.innerHTML=d.toLocaleTimeString();
}

// Update greeting and message
function myGreet(){
  const h = new Date().getHours();
  updateGreeting(h);
}

// Checks the hour every hour and Changes innerHtml of greeting and msg elements.
function updateGreeting(hours){
  if(hours >= 0 && hours < 12){
    elGreeting.innerHTML = 'Rise and shine, Pat.';
    elMessage.innerHTML = 'What are we doing this morning?';
  } else if(hours >=12 && hours < 17){
    elGreeting.innerHTML = 'It\'s a bright beautiful day, Pat.';
    elMessage.innerHTML = 'What are we doing this afternoon?';
  } else {
    elGreeting.innerHTML = 'Shut \'er down, Pat.';
    elMessage.innerHTML = 'What\'s going on this evening?';
  }
}

function changeCSS(cssObj){
  console.log(cssObj);
  elHeader.style.backgroundImage = `url('${cssObj.img}'`;
  elTime.style.color=`${cssObj.h1Color}`;
  elGreeting.style.color=`${cssObj.h3Color}`;
  elMessage.style.color=`${cssObj.h4Color}`;
}


