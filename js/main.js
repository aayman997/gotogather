//Side Menu Settings
const sideMenuHeight = $('.side-menu').height();
const DomElements = {
	navBarBtn: document.querySelector('.navbar-toggler'),
	sideMenuClose: document.querySelector('.side-menu .close-menu button')
};

function menuOpen() {
	$('#sideMenu').animate({right: '0'}, 400);
	$('body').css('overflow', 'hidden');
}

function menuClose() {
	$(this).parents('.side-menu').animate({right: '-100vw'}, 400);
	$('body').css('overflow', 'scroll');
}

DomElements.navBarBtn.addEventListener('click', menuOpen);
DomElements.sideMenuClose.addEventListener('click', menuClose);
