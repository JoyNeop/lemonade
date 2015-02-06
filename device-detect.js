(function(){
	var ua = navigator.userAgent;
	var de;
	if (ua.indexOf('iPad') != -1) {
		de = 'ipad';
	} else {
		de = 'iphone';
	};
	document.body.getElementsByClassName('device')[0].classList.add(de);
	if (window.innerWidth == 768) {
		document.body.getElementsByClassName('device')[0].classList.add('portrait');
	};
})();