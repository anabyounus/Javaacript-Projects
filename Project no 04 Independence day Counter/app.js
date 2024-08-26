// ===========================Confetti Start ====================


// confetti({
//     spread: 360,
//     ticks: 200,
//     gravity: 1,
//     decay: 0.94,
//     startVelocity: 30,
//     particleCount: 100,
//     scalar: 5,
//     shapes: ["image"],
//     shapeOptions: {
//       image: [{
//           src: "https://particles.js.org/images/fruits/apple.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/avocado.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/banana.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/berries.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/cherry.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/grapes.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/lemon.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/orange.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/peach.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/pear.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/pepper.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/plum.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/star.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/strawberry.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/watermelon.png",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://particles.js.org/images/fruits/watermelon_slice.png",
//           width: 32,
//           height: 32,
//         },
//       ],
//     },
//   });



// ===========================Confetti End =======================

//=================Counter Start============================
let daysItem = document.querySelector("#days")
let minutesItem = document.querySelector("#minutes")
let hoursItem = document.querySelector("#hours")
let secondsItem = document.querySelector("#seconds")

let countdown = () => {
    let futuredate = new Date("14 august 2024")
    let currentDate = new Date()
    let myDate = futuredate - currentDate
    
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24 )

    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24

    let mins = Math.floor(myDate / 1000 / 60 ) % 60

    let secs = Math.floor(myDate / 1000) % 60

    daysItem.innerHTML = days
    hoursItem.innerHTML = hours
    minutesItem.innerHTML = mins
    secondsItem.innerHTML = secs
}
countdown()

setInterval(countdown , 1000)

//=================Counter End============================



//===========mouse styles strat
let sparkInterval;
function spark(e, opt_properties) {
	let mouseX, mouseY;
	let event = e;
	if (!e) {
		event = window.event;
	}
	if (event && (event.pageX || event.pageY)) {
		mouseX = event.pageX;
		mouseY = event.pageY;
	}
	else if (event && (event.clientX || event.clientY))    {
		mouseX = event.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
		mouseY = event.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
	}
	const defaultProperties = {color: `random`, mouseX: mouseX, mouseY: mouseY, hw: 30, sparks: 8, sw: 8, time: 400};
	const randInt = (min, max) => {return Math.floor(Math.random() * (max - min + 1)) + min;}
  const c = Object.assign(defaultProperties, opt_properties);
	const col = c.color === 'random' ? `rgb(${randInt(0,255)}, ${randInt(0,255)}, ${randInt(0,255)})` : c.color;
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("viewBox", "0 0 100 100");
	svg.setAttribute("style", `width: 100%; height: 100%; position: absolute; height: ${c.hw}px; width: ${c.hw}px; transform: translate(-50%,-50%); left: ${c.mouseX}px; top: ${c.mouseY}px; z-index: 99999`);
	for (let i = 0; i < c.sparks; i++) {
		svg.insertAdjacentHTML('afterbegin', `<path d="M50 50 50 ${50 - c.sw/2}" stroke="${col}" stroke-linecap="round" stroke-width="${c.sw}" fill="none" transform="rotate(${((360 / c.sparks) * i) - (180 / c.sparks)} 50 50)"><animate attributeName="d" values="M50 50 50 ${50 - c.sw/2}; M50 ${50 - c.sw} 50 ${c.sw/2}; M50 ${c.sw/2} 50 ${c.sw/2}" dur="${c.time}ms" begin="0s" repeatCount="0" fill="freeze" /></path>`);
	}
	document.body.appendChild(svg);
	setTimeout(() => {svg?.remove();}, c.time);
}
document.addEventListener("click", (event) => {spark(event, {color: 'random', hw: 60}); clearInterval(sparkInterval);});
document.addEventListener("mousemove", (event) => {spark(event, {color: 'random'}); clearInterval(sparkInterval);});
document.addEventListener("touchmove", (event) => {const touch = event.touches[0]; // Get the first touch point
  const x = touch.clientX; // Get the x coordinate relative to the viewport
  const y = touch.clientY; // Get the y coordinate relative to the viewport
	spark({x, y}, {color: 'random'}); clearInterval(sparkInterval);});

function infiniteSparkle() {
	sparkInterval = setInterval(()=> {
		const boundingBox = document.getElementById('getMe').getBoundingClientRect();
		spark(undefined, {color: 'random', mouseX: boundingBox.left + window.scrollX, mouseY: boundingBox.top + window.scrollY});
	}, 50);
}
infiniteSparkle();

