function projects() {
	let output = document.getElementById("nfts-list");

	fetch("https://api.github.com/orgs/Tullax/repos").then(req => req.json()).then(data => {
		for (let nft of data) {
			if (nft.topics.includes("nft")) {
				output.innerHTML += `<a href="${nft.homepage}"><button><img src="${nft.homepage}/Logo.png" /><br>${nft.name.replaceAll("-", " ")}</button></a>`;
			}
		}
	});
}

projects();
