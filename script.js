function encode_page() {
	var div = document.getElementById("text");
	if (div == null) {
		return;
	}
	var plaintext = div.textContent;
	var ciphertext = btoa(unescape(encodeURIComponent(plaintext)));
	var span = document.getElementById("url");
	if (span != null) {
		var root = window.location.href.split(/[?#]/)[0];
		span.textContent = `${root}?src=${ciphertext}`;
	}
}

function decode_page() {
	var url = new URL(document.location);
	var ciphertext = url.searchParams.get("src");
	var plaintext = decodeURIComponent(escape(atob(ciphertext)));
	var div = document.getElementById("text")
	if (div != null) {
		div.textContent = plaintext;
	}
}
