let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpeg') {
      myImage.setAttribute ('src','images/firefox-real-icon.jpeg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

localStorage.removeItem('name')
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
