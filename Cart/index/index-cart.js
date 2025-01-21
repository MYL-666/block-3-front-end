window.onload=function(){
    var totalAmount=document.getElementById("total-amount");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    var formlist=document.getElementsByTagName("form");
    var hint=document.getElementById("hint")
    var index=0;

    // if there is no item, would allow to return to home page
    if (index === 0) {  
        btn02.style.display = "none";
        btn03.style.display = "inline-block";
        formlist[1].action="../../main/index/index-main.html"
    }else{
        btn02.style.display="block";
        btn03.style.display="none";
        hint.style.display="none";
    }

    
};