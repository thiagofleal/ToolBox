var script = document.currentScript;

function scriptFileName() {
	return script.src;
}

function frameworkPath(){
	return scriptFileName().replace("include.js", "");
}

document.writeln(
	'<link '
	+ 'type="text/css" '
	+ 'rel="stylesheet" '
	+ 'href="'
	+ frameworkPath() + "css/normalize.css"
	+ '">'
);

document.writeln(
	'<script '
	+ 'src="'
	+ frameworkPath() + "js/jquery.min.js"
	+ '"></script>'
);

document.writeln(
	'<script '
	+ 'src="'
	+ frameworkPath() + "js/jquery.mask.min.js"
	+ '"></script>'
);

document.writeln(
	'<link '
	+ 'type="text/css" '
	+ 'rel="stylesheet" '
	+ 'href="'
	+ frameworkPath() + "css/bootstrap.min.css"
	+ '">'
);

document.writeln(
	'<meta name="viewport" content="width=device-width, initial-scale=1.0">'
);

document.writeln(
	'<!--[if lt IE 9]>'
);
document.writeln(
	'<script src="' + frameworkPath() + "js/html5shiv.js" + '"></script>'
);
document.writeln(
	'<script src="' + frameworkPath() + "js/respond.js" + '"></script>'
);
document.writeln(
	'<![endif]-->'
);

window.onload = function(){
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = frameworkPath() + "js/bootstrap.min.js";
	document.body.appendChild(script);
};