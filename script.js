function encode_page() {
	var div = document.getElementById("text");
	if (div == null) {
		return;
	}
	var plaintext = div.textContent;
	var ciphertext = btoa(unescape(encodeURIComponent(plaintext)));
	var inp = document.getElementById("url");
	if (inp != null) {
		var root = window.location.href.split(/[?#]/)[0];
		inp.value = `${root}?src=${ciphertext}`;
		inp.select();
		inp.setSelectionRange(0, 99999);
		document.execCommand("copy");
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
