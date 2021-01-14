function encode_page() {
	var textinp = document.getElementById("text");
	if (textinp == null) {
		return;
	}
	var plaintext = textinp.value;
	console.log(plaintext);
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
	if (ciphertext == null) {
		return;
	}
	var plaintext = decodeURIComponent(escape(atob(ciphertext)));
	var textinp = document.getElementById("text");
	if (textinp != null) {
		textinp.textContent = plaintext;
		textinp.value = textinp.textContent;
	}
}
