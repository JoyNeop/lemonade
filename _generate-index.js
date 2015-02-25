var fs = require('fs');

var microTemplate = '<li><a href="_LINK_">_LINK_</a></li>'
var list = '';

var allFiles = fs.readdirSync('.');
var lemonadeFiles = [];

for (var i = 0; i < allFiles.length; i++) {
	try {
		var le = allFiles[i].charAt(0).match(/[A-Z]/).length;
	} catch (e) {
		var le = 0;
	};
	if (le == 1 && allFiles[i].indexOf('.html') != -1) {
		list += microTemplate.replace(/_LINK_/g, allFiles[i]);
	};
};

fs.writeFileSync('_list-of-pages.html', list);