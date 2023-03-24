// Get the hamburger icon, menu, and open menu button
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menu = document.getElementById('nav-menu');

// When the hamburger icon is clicked, show the menu and hide the open button
openMenuBtn.addEventListener('click', function() {
  menu.classList.remove('hidden');
  openMenuBtn.classList.add('hidden');
});

// When the close button is clicked, hide the menu and show the open button
closeMenuBtn.addEventListener('click', function() {
  menu.classList.add('hidden');
  openMenuBtn.classList.remove('hidden');
});


//want youtube vid on this? follow me!

//scroll down...

var starsNumber = 100;
//number of stars

var c = document.getElementById('c');
var ctx = c.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;
var x = 100; var y = 100;

//where the stars are stored
var stars = [];
for(i = 0; i < starsNumber; i++) {
  //making 100 stars
  stars.push(new star);
};

function star() {
  //the obj star function
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  //random position
  
  this.vx = 1;
  //starting velocity
  
  this.r = Math.random() * 3 + 2;
  //random size
}

//the reset
function draw() {
  c.width = w;
  c.height = h;
  //canvas width & height
  
  for(t = 0; t < stars.length; t++) {
    var s = stars[t];
    
    //building the stars
    ctx.beginPath();
    ctx.fillStyle = 'lightgray';
    ctx.arc(s.x, s.y, s.r, Math.PI * 2, false);
    ctx.fill();
    
    //animating the stars
    s.x-=s.vx;
    
    //keeping the stars on the canvas
    if(s.x < -s.r) {
      s.x = w + s.r;
    };
    if(s.r < 5) {
      s.vx = 1;
    };
    if(s.r < 4) {
      s.vx = 0.5;
    };
    if(s.r < 3) {
      s.vx = 0.25;
    };
  }
}

setInterval(draw, 20);






