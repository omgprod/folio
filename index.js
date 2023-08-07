
// Button

const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

const angle = 20;
const rotateCard = window;

const lerp = (start, end, amount) => {
	return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
	const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
	return Math.min(Math.max(newValue, -newMax), newMax);
};

// var x;
// var $cards = $(".card");
// var $style = $(".hover");


// $cards
//   .on("mousemove touchmove", function(e) { 
//     // normalise touch/mouse
//     var pos = [e.offsetX,e.offsetY];
//     e.preventDefault();
//     if ( e.type === "touchmove" ) {
//       pos = [ e.touches[0].clientX, e.touches[0].clientY ];
//     }
//     var $card = $(this);
//     // math for mouse position
//     var l = pos[0];
//     var t = pos[1];
//     var h = $card.height();
//     var w = $card.width();
//     var px = Math.abs(Math.floor(100 / w * l)-100);
//     var py = Math.abs(Math.floor(100 / h * t)-100);
//     var pa = (50-px)+(50-py);
//     // math for gradient / background positions
//     var lp = (50+(px - 50)/1.5);
//     var tp = (50+(py - 50)/1.5);
//     var px_spark = (50+(px - 50)/7);
//     var py_spark = (50+(py - 50)/7);
//     var p_opc = 20+(Math.abs(pa)*1.5);
//     var ty = ((tp - 50)/2) * -1;
//     var tx = ((lp - 50)/1.5) * .5;
//     // css to apply for active card
//     var grad_pos = `background-position: ${lp}% ${tp}%;`
//     var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
//     var opc = `opacity: ${p_opc/100};`
//     var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
//     // need to use a <style> tag for psuedo elements
//     var style = `
//       .card:hover:before { ${grad_pos} }  /* gradient */
//       .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
//     `
//     // set / apply css class and style
//     $cards.removeClass("active");
//     $card.removeClass("animated");
//     $card.attr( "style", tf );
//     $style.html(style);
//     if ( e.type === "touchmove" ) {
//       return false; 
//     }
//     clearTimeout(x);
//   }).on("mouseout touchend touchcancel", function() {
//     // remove css, apply custom animation on end
//     var $card = $(this);
//     $style.html("");
//     $card.removeAttr("style");
//     x = setTimeout(function() {
//       $card.addClass("animated");
//     },2500);
//   });

  document.querySelectorAll('.gravityButton').forEach(btn => {
  
    btn.addEventListener('mousemove', (e) => {
      
      const rect = btn.getBoundingClientRect();    
      const h = rect.width / 2;
      
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - h;
  
      const r1 = Math.sqrt(x*x+y*y);
      const r2 = (1 - (r1 / h)) * r1;
  
      const angle = Math.atan2(y, x);
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;
      
      const op = (r2 / r1) + 0.25;
  
      btn.style.setProperty('--tx', `${tx}px`);
      btn.style.setProperty('--ty', `${ty}px`);
      btn.style.setProperty('--opacity', `${op}`);
    });
  
    btn.addEventListener('mouseleave', (e) => {
      btn.style.setProperty('--tx', '0px');
      btn.style.setProperty('--ty', '0px');
      btn.style.setProperty('--opacity', `${0.25}`);
    });
  })


  let test = document.getElementsByClassName("fa-brands")  
  Array.from(test).forEach(element => {
    element.addEventListener("mouseover", (event) => element.classList.add("fa-beat"));
    element.addEventListener("mouseleave", (event) => element.classList.remove("fa-beat"));

  });
  const width  = window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;

  console.log(width, height);
  console.log(window.screen.width)
  let divs = document.getElementById("glasses")
  for(let i = 0; i < 10; i++){
    let num = 5+Math.random()*1100;
    let test = (i % 2 == 0) ? "-" : ""; 
    let bubble = document.createElement("div")
    bubble.classList.add("glass")
    bubble.style = 
    `--height:${4+Math.random()*20}rem;
    --width:${4+Math.random()*20}rem;
    --distance:${6+Math.random()*4}rem;
    --position:${test+num}px;
    --time:${2+Math.random()*2}s;
    --delay:${-1*(2+Math.random()*2)}s;
    position:absolute;
    transform: rotate(${Math.random()*360}deg);
    top: ${Math.floor(Math.random() * height)}px;
    left: ${Math.floor(Math.random() * width)}px;`
    divs.appendChild(bubble)
  }

