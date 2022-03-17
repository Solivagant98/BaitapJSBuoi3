function soSanh(){
    var soThuNhat = document.getElementById("soThuNhat").value*1;
    var soThuHai = document.getElementById("soThuHai").value*1;
    var soThuBa = document.getElementById("soThuBa").value*1;
    if (soThuNhat<=soThuHai && soThuNhat<=soThuBa)
{
        if (soThuHai<=soThuBa)
        {alert(soThuNhat + ", " + soThuHai + ", " +soThuBa);}
        else
        {alert(soThuNhat + ", " + soThuBa + ", " +soThuHai);}
}

else if (soThuHai<=soThuNhat && soThuHai <=soThuBa)
{
        if (soThuNhat<=soThuBa)
        {alert(soThuHai + ", " + soThuNhat + ", " +soThuBa);}
        else
        {alert(soThuHai + ", " + soThuBa + ", " +soThuNhat);}
}

else if (soThuBa<=soThuNhat && soThuBa<=soThuHai)
{
        if (soThuNhat<=soThuHai)
        {alert(soThuBa + ", " + soThuNhat + ", " +soThuHai);}
        else
        {alert(soThuBa + ", " + soThuHai + ", " +soThuNhat);}
}}