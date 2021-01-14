function base64_encode(x) {
	return btoa(unescape(encodeURIComponent(x)));
}

function base64_decode(x) {
	return decodeURIComponent(escape(atob(x)));
}

if (window.location.hash) {
	var hash = window.location.hash.substring(1);
	var src = base64_decode(hash);
	var div = document.getElementById("text");
	if (div != null) {
		div.appendChild(document.createTextNode(src));
	}
}
