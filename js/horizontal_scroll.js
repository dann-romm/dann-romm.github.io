$(document).ready(function(){

	const spaceHolder = document.querySelector('.space-holder');
	const horizontal = document.querySelector('.horizontal');
	spaceHolder.style.height = calcDynamicHeight(horizontal) + "px";

	function calcDynamicHeight(ref) {
		const vw = window.innerWidth;
		const vh = window.innerHeight;
		const objectWidth = ref.scrollWidth;
		return objectWidth - vw + vh + 50;
	}

	window.addEventListener('scroll', () => {
		const sticky = document.querySelector('.sticky');
		horizontal.style.transform = "translateX(-" + sticky.offsetTop + "px)";
	});

	window.addEventListener('resize', () => {
		spaceHolder.style.height = calcDynamicHeight(horizontal) + "px";
	});
});
