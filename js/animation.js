$(document).ready(function(){

	var observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			var entryObject = entry.target.querySelector('.animate');
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
		}

		if (entry.isIntersecting) {
			entryObject.classList.add('to-animate');
			return;
		}

		entryObject.classList.remove('to-animate');
		});
	});

	document.querySelectorAll('.tab-img').forEach( item => {
		observer.observe(item);
	});
	document.querySelectorAll('.tab-header').forEach( item => {
		observer.observe(item);
	});
});
