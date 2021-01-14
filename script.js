function encode_page_to_clipboard() {
	var div = document.getElementById("text");
	console.log(div.childNodes);
	if (div != null && div.childNodes.length == 1) {
		var src = div.childNodes[0].textContent;
		return btoa(unescape(encodeURIComponent(src)));
	}
}

function decode_page() {
	var url = new URL(document.location);
	var ciphertext = url.searchParams.get("src");
	var plaintext = decodeURIComponent(escape(atob(ciphertext)));
	var div = document.getElementById("text")
	div?.appendChild(document.createTextNode(plaintext));
}
