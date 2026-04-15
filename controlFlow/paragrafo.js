function multi() {
    var a = 5;
    var b = 9;
    result = a * b;

    document.getElementById("p1").innerText = result;
}


function multi2(a, b) {
    const resultado = a / b;

    document.getElementById("p2").innerText = resultado.toFixed(2);
}


(function(sayHello) {
    console.log("Hello World!")
})();

