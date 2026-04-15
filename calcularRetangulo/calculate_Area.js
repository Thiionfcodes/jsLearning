
function calculateArea() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let result = length * width;

    if (length)

    document.getElementById("result").innerText = `Área: ${result}`;
}