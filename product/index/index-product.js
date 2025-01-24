window.onload = function () {
    var index = 0; 
    var imgArr = document.querySelectorAll(".imgList li");
    var prevBtn = document.querySelector('.prev'); 
    var nextBtn = document.querySelector('.next'); 
    var allA = document.querySelectorAll(".nav-dots a"); 


    function init() {
        index = 0; 
        setA(); 
    }
    init();

 
    prevBtn.onclick = function () {
        index--; 
        if (index < 0) index = imgArr.length - 1; 
        setA();
    };

    nextBtn.onclick = function () {
        index++; 
        if (index >= imgArr.length) index = 0; 
        setA();
    };


    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            index = this.num; 
            setA();
        };
    }

    function setA() {
        for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].style.opacity = "0"; 
            imgArr[i].style.zIndex = "0"; 
            allA[i].style.backgroundColor = ""; 
        }
        imgArr[index].style.opacity = "1"; 
        imgArr[index].style.zIndex = "1"; 
        allA[index].style.backgroundColor = "black"; 
    }
};
