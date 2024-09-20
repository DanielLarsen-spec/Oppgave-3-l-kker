updateView()
function updateView(){
document.getElementById('app').innerHTML = /*HTML*/`
<div>${reversedString}</div>
<input id="words" type="text" onchange="change(this.value)">
<button onclick="clicker()">Submit</button>





`;
}