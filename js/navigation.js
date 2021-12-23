class Navigation {

	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.headerHeight = 70;
		let self = this;

		$('.tab').click(function() {
			self.click(event, $(this));
		});
		$(window).scroll(() => {
			this.scroll();
		});
		$(window).resize(() => {
			this.resize();
		});
	}
	
	updateTopContainer() {
		let offset = $('.tabs').offset().top + $('.tabs').height() - this.headerHeight;
		if ($(window).scrollTop() > offset) {
			$('.tabs-container').addClass('tabs-container--top');
		}
		else {
			$('.tabs-container').removeClass('tabs-container--top');
		}
	}
	
	updateCurrentTab(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.headerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.headerHeight;
			if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.updateSliderPosition();
		}
	}
	
	updateSliderPosition() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.tab-slider').css('width', width);
		$('.tab-slider').css('left', left);
	}

	click(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.headerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	scroll() {
		this.updateTopContainer();
		this.updateCurrentTab();
	}
	
	resize() {
		if(this.currentId) {
			this.updateSliderPosition();
		}
	}
}

new Navigation();