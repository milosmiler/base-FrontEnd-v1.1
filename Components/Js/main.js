
let burger = document.querySelector(".burger"),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.close'),
	overlay = document.querySelector('.overlay');

	burger.addEventListener("click", function(){
		menu.className += ' open';
		overlay.className += ' open';
	});

	close.addEventListener("click", function(){
		menu.classList.remove('open');
		overlay.classList.remove('open')
	});