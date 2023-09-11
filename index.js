window.addEventListener('load', function() {
    document.querySelector('.preloader').classList.add('hidden');
  });

  
// disable scrolling
document.body.style.overflow = 'hidden';

// enable scrolling once page is fully loaded
window.addEventListener('load', function() {
  document.body.style.overflow = 'auto';
});


// Get the hamburger icon, menu, and open menu button
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menu = document.getElementById('nav-menu');
const socials = document.getElementById('socials')

// When the hamburger icon is clicked, show the menu and hide the open button
openMenuBtn.addEventListener('click', function() {
  menu.classList.remove('hidden');
  menu.classList.add('transition');
  openMenuBtn.classList.add('hidden');
  socials.classList.add('hidden');
});

// When the close button is clicked, hide the menu and show the open button
closeMenuBtn.addEventListener('click', function() {
  menu.classList.remove('transition');
  menu.classList.add('hidden');
  openMenuBtn.classList.remove('hidden');
  socials.classList.remove('hidden');
});






var starsNumber = 100;
//number of stars

var c = document.getElementById('c');
var ctx = c.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;
var x = 100;
var y = 100;

//where the stars are stored
var stars = [];
for (i = 0; i < starsNumber; i++) {
  //making 100 stars
  stars.push(new star());
}

function star() {
  //the obj star function
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  //random position

  this.vx = 1;
  //starting velocity

  this.r = Math.random() * 3 + 2;
  //random size
  
  //random color
  this.color = getRandomColor();
}

// Get a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//the reset
function draw() {
  c.width = w;
  c.height = h;
  //canvas width & height

  for (t = 0; t < stars.length; t++) {
    var s = stars[t];

    //building the stars
    ctx.beginPath();
    ctx.fillStyle = s.color;
    ctx.arc(s.x, s.y, s.r, Math.PI * 2, false);
    ctx.fill();

    //animating the stars
    s.x -= s.vx;

    //keeping the stars on the canvas
    if (s.x < -s.r) {
      s.x = w + s.r;
    }
    if (s.r < 5) {
      s.vx = 1;
    }
    if (s.r < 4) {
      s.vx = 0.5;
    }
    if (s.r < 3) {
      s.vx = 0.25;
    }
  }
}

// Call the draw function to start the animation
draw();


setInterval(draw, 20);

function toggleText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var button = document.getElementById("button");

  if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden");

      // Hide the more text
      moreText.classList.add("hidden");

      // change text of the button
      button.innerHTML = "Read more";
  } else {
      // Hide the dots
      dots.classList.add("hidden");

      // hide the more text
      moreText.classList.remove("hidden");

      // change text of the button
      button.innerHTML = "Read less";
  }
}


const downloadButton = document.getElementById("download-button");
const container = document.querySelector(".contaiiner");

window.addEventListener("scroll", () => {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = downloadButton.getBoundingClientRect();
  
  if (buttonRect.top < containerRect.bottom && buttonRect.bottom > containerRect.top) {
    downloadButton.style.opacity = "0.5";
  } else {
    downloadButton.style.opacity = "1";
  }
});








