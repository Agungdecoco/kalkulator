var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");
var tmpVal = '';
var hitung = false;
var operator = '';
var reset = false;

tombol.addEventListener("click", function(e){

    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;
    
    if (nilaiTombol == "C") {
        layar.value = "";
        tmpVal = "";
    } else if (nilaiTombol == "<") {
        layar.value = layar.value.slice(0, -1);
    } else if (nilaiTombol == "=") {
        if (hitung = true) {
            layar.value = eval(tmpVal + operator + layar.value);
            hitung = false;
        }
    } else if (nilaiTombol == ".") {
        layar.value = layar.value + nilaiTombol;
    } else if (tombolClick.classList.contains('operator')) {
        if (hitung == true) {
            layar.value = eval(tmpVal + operator + layar.value);
            hitung = false;
        }
        tmpVal = layar.value;
        operator = nilaiTombol;
        reset = true;
    } else {
        if (reset == true) {
            layar.value = nilaiTombol;
            reset = false;
            hitung = true;
        } else {
            layar.value = layar.value + nilaiTombol;     
        }
    }
});