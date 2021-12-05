$(document).ready(function(){

	var observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			var entryObject = entry.target.querySelector('.animate');
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
		}

		if (entry.isIntersecting) {
			entryObject.classList.add('to-animate');
			console.log("added")
			return;
		}

		entryObject.classList.remove('to-animate');
		console.log("removed");
		});
	});

	var wrapper1 = document.querySelector('.vscode-img');
	var wrapper2 = document.querySelector('.vscode-header');

	observer.observe(wrapper1);
	observer.observe(wrapper2);
});
