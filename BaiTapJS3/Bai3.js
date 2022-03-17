function demSo() {
    var a= document.getElementById("soA").value*1;
    var b= document.getElementById("soB").value*1;
    var c= document.getElementById("soC").value*1;
    var soSoChan=0
    var soSoLe=0
    if (a%2==0) {soSoChan++} else {soSoLe++};
    if (b%2==0) {soSoChan++} else {soSoLe++};
    if (c%2==0) {soSoChan++} else {soSoLe++};
    alert("có " + soSoLe + " số lẻ" + ", có " + soSoChan + " số chẵn" ) 
}