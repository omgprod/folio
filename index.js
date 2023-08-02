
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

document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".card");
  console.log(cards)
	cards.forEach((e) => {		
    console.log(e)
		e.addEventListener("mousemove", (event) => {
			const rect = e.getBoundingClientRect();
			const centerX = (rect.left + rect.right) / 2;
			const centerY = (rect.top + rect.bottom) / 2;
			const posX = event.pageX - centerX;
			const posY = event.pageY - centerY;
			const x = remap(posX, rect.width / 2, angle);
			const y = remap(posY, rect.height / 2, angle);
			e.dataset.rotateX = x;
			e.dataset.rotateY = -y;
		});
		
		e.addEventListener("mouseout", (event) => {
			e.dataset.rotateX = 0;
			e.dataset.rotateY = 0;
		});
	});
	
	const update = () => {
		cards.forEach((e) => {
			let currentX = parseFloat(e.style.getPropertyValue('--rotateY').slice(0, -1));
			let currentY = parseFloat(e.style.getPropertyValue('--rotateX').slice(0, -1));
			if (isNaN(currentX)) currentX = 0;
			if (isNaN(currentY)) currentY = 0;
			const x = lerp(currentX, e.dataset.rotateX, 0.05);
			const y = lerp(currentY, e.dataset.rotateY, 0.05);
			e.style.setProperty("--rotateY", x + "deg");
			e.style.setProperty("--rotateX", y + "deg");
		})
	}
	setInterval (update,1000/60)
});


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

