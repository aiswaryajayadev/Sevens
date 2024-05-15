
var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');
console.log("hi");
console.log(value); 

let params = new URL(document.location.toString()).searchParams;
let fardeen = params.get("name");
console.log(fardeen);
