function suruklemeyeizin(event) {
    event.preventDefault();
}

function surukle(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function birak(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    // event.target.appendChild(document.getElementById(data));
    document.getElementById('div2').innerHTML += "Youtube ";
}

