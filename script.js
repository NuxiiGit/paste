function encode_page() {
	var div = document.getElementById("text");
	console.log(div.childNodes);
	if (div != null && div.childNodes.length == 1) {
		var src = div.childNodes[0].textContent;
		return btoa(unescape(encodeURIComponent(src)));
	}
}

function decode_page() {
	if (window.location.hash) {
		var hash = window.location.hash.substring(1);
		var src = decodeURIComponent(escape(atob(hash)));
		console.log(src);
		var div = document.getElementById("text");
		if (div != null) {
			div.appendChild(document.createTextNode(src));
		}
	}
}
