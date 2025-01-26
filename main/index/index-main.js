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
    };
    init();
    

    // Bind a single machine response function to all a
    for(var i=0;i<allA.length;i++){
        allA[i].num = i;
        allA[i].onclick=function(){
            index=this.num;
            setA();
            clearInterval(timer);
            autoChange();
        };
    };


    // Create a function to store the image state
    function setA() {
        for (var i = 0; i < imgArr.length; i++) {
            // Reset all image states
            imgArr[i].style.opacity = "0"; 
            imgArr[i].style.zIndex = "0"; 
            allA[i].style.backgroundColor="";
        };
        // Selected state
        imgArr[index].style.opacity = "1"; 
        imgArr[index].style.zIndex = "1"; 
        allA[index].style.backgroundColor="black";
    };

    // Create a function to play pictures automatically
    function autoChange(){
        timer=setInterval(function(){
            index++;
            index%=imgArr.length;
            setA();
        },3000);
    };
    
   autoChange()
//    #endregion slideShow

    // #region slide bar for mobile device
    // get element by id
    var menuBtn = document.getElementById("menu-btn");
    var menuContent = document.getElementById("menu-content");
    var close=document.getElementById("close")

    // Bind click event to button
    menuBtn.onclick = function () {
        // when its open,click will close; when its close, click will open
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none"; 
        } else {
            menuContent.style.display = "block"; 
        }
    };
    close.onclick = function () {
        // when its open,click will close; when its close, click will open
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none"; 
        } else {
            menuContent.style.display = "block"; 
        }
    };
    // #endregion sildebar for mobile device



    // #region adding the products to cart
    var cartBtn=document.querySelectorAll("#add-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    for(var i=0;i<cartBtn.length;i++){
        cartBtn[i].onclick=function(){
            var name=this.dataset.name;
            var price=this.dataset.price;
            var img=this.dataset.img;
            // if item already exist,number +1 or number=1
            var existItem=cart.find((item) => item.name === name);
            if (existItem) {
                existItem.quantity++; 
            } else {
                // add new product
                cart.push({ name, price, img, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${name} has been added to the cart!`);
        }
    }

    var pikachu=document.getElementById("pikachu")
    pikachu.onclick=function(){
        window.location.href="../../product/index/index-product.html"
    }

    // mobile slide bar
    var open=document.querySelectorAll(".btn-open")
    var details=document.querySelectorAll(".menu-detail")
    for(let i=0;i<open.length;i++){
        details[i].style.display = "none";
        open[i].onclick=function(){
            if (details[i].style.display === "block") {
                details[i].style.display = "none"; 
                open[i].style.transform="rotate(0deg)"
            } else {
                details[i].style.display = "block"; 
                open[i].style.transform="rotate(90deg)"
            }
        }
    }
}
