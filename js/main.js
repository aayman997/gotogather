//Side Menu Settings
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

$('.input-group-append').on('click', function () {
	if ($(this).siblings().attr('type') === 'password') {
		$(this).siblings().prop('type', 'text');
	} else if ($(this).siblings().attr('type') === 'text') {
		$(this).siblings().prop('type', 'password');
	}
	$(this).find('i')
		.toggleClass('fa-eye')
		.toggleClass('fa-eye-slash');
});

if (window.location.href.indexOf('home') > -1) {
	$('.bottom-nav .fa-home').parent('.nav-link')
		.addClass('active')
		.siblings().removeClass('active');
} else if (window.location.href.indexOf('search') > -1) {
	$('.bottom-nav .fa-search').parent('.nav-link')
		.addClass('active')
		.siblings().removeClass('active');
} else if (window.location.href.indexOf('group') > -1) {
	$('.bottom-nav .fa-users').parent('.nav-link')
		.addClass('active')
		.siblings().removeClass('active');
} else if (window.location.href.indexOf('profile') > -1) {
	$('.bottom-nav .fa-user').parent('.nav-link')
		.addClass('active')
		.siblings().removeClass('active');
}
