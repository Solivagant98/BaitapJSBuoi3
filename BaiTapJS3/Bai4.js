function tamGiac() {
    var a=document.getElementById("canhA").value*1;
    var b=document.getElementById("canhB").value*1;
    var c=document.getElementById("canhC").value*1;
    if (a+b>c && a+c>b && b+c >a) { 
        if (a==b && b==c) {alert("Tam giác đều")} else
        if((a*a+b*b==c*c && a==b) || (a*a+c*c==b*b && a==c) || (b*b+c*c==a*a&&b==c)) {alert("Tam giác vuông cân")} else
        if (a==b||b==c||a==c) {alert("Tam giác cân")} else 
        if (a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a) {alert ("Tam giác vuông")} else {alert ("Tam giác thường")};    
    } 
    else {alert ("Không tạo thành tam giác")}
        
    }
    
