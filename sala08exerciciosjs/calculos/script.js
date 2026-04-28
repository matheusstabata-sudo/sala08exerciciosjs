function somar() {
    var n1 = document.getElementById("n1").valueAsNumber;
    var n2 = document.getElementById("n2").valueAsNumber;
    var resp = document.getElementById("resultado");
    resp.textContent = n1 + n2;
}
    function subtrair() {
        var n3 = document.getElementById("n3").valueAsNumber;
        var n4 = document.getElementById("n4").valueAsNumber;
        var resp = document.getElementById("resultado2");
        resp.textContent = n3 - n4;
    }

    function multiplicar() {
        var n5 = document.getElementById("n5").valueAsNumber;
        var n6 = document.getElementById("n6").valueAsNumber;
        var resp = document.getElementById("resultado3");
        resp.textContent = n5 * n6;
    }

    function dividir() {
        var n7 = document.getElementById("n7").valueAsNumber;
        var n8 = document.getElementById("n8").valueAsNumber;
        var resp = document.getElementById("resultado4");
        resp.textContent = n7 / n8;
    }

