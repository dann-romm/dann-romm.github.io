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

	var wrapper1 = document.querySelector('.tab-img#vscode');
	var wrapper2 = document.querySelector('.tab-header#vscode');
	var wrapper3 = document.querySelector('.tab-img#xcode');
	var wrapper4 = document.querySelector('.tab-header#xcode');
	var wrapper5 = document.querySelector('.tab-img#jb');
	var wrapper6 = document.querySelector('.tab-header#jb');

	observer.observe(wrapper1);
	observer.observe(wrapper2);
	observer.observe(wrapper3);
	observer.observe(wrapper4);
	observer.observe(wrapper5);
	observer.observe(wrapper6);
});
