window.onload=function(){

    // #region slideShow
    var index=0;
    var imgArr=document.querySelectorAll(".imgList img");
    var allA=document.querySelectorAll("#nav-img a");
    var timer

    // Initialize index
    function init() {
        index = 0; 
        setA(); 
    }
    init();
    

    // Bind a single machine response function to all a
    for(var i=0;i<allA.length;i++){
        allA[i].num = i;
        allA[i].onclick=function(){
            index=this.num;
            setA();
            clearInterval(timer)
            autoChange()
        }
    };


    // Create a function to store the image state
    function setA() {
        for (var i = 0; i < imgArr.length; i++) {
            // Reset all image states
            imgArr[i].style.opacity = "0"; 
            imgArr[i].style.zIndex = "0"; 
            allA[i].style.backgroundColor="";
        }
        // Selected state
        imgArr[index].style.opacity = "1"; 
        imgArr[index].style.zIndex = "1"; 
        allA[index].style.backgroundColor="black";
    }

    // Create a function to play pictures automatically
    function autoChange(){
        timer=setInterval(function(){
            index++
            index%=imgArr.length
            setA()
        },3000)
    }
    
   autoChange()
//    #endregion slideShow


}