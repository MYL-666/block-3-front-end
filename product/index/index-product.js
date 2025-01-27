window.onload = function () {
    // #region slideshow
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
    // #endregion slideshow end


    //#region description and details and reviews;
    var detailDescription=document.getElementById("detail-description");
    var btnDescription=document.getElementById("btn-description");
    var details=document.getElementById("details")
    var btnDetail=document.getElementById("btn-detail")
    var delivery=document.getElementById("delivery")
    var btnDelivery=document.getElementById("btn-delivery")
    var btnComment=document.getElementById("btn-comment")
    var commentList=document.getElementById("comment-list")

    show(detailDescription,btnDescription)
    show(details,btnDetail);
    show(delivery,btnDelivery)
    show(commentList,btnComment)
    // make a function to handle multiple usage
    function show(name,btn){
        name.style.display="none"
        btn.onclick=function(){
            if(name.style.display=="none"){
                name.style.display="block";
                btn.innerText="-";
            }else{
                name.style.display="none";
                btn.innerText="+";
            }
        }
    }
    // #endregion description end

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

    // #region add to cart
    var add=document.getElementById("add");
    var decrease=document.getElementById("decrease");
    var increase=document.getElementById("increase");
    var quantity=document.getElementById("quantity");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    var successModal = new bootstrap.Modal(document.getElementById("successModal"));
    var modalMessage = document.getElementById("modalMessage");

    var j=quantity.value
    decrease.onclick=function(){
        if(j!=1){
            j--;
            quantity.value=j;
        }else{
            j=1;
        }
    }

    increase.onclick=function(){
        j++;
        quantity.value=j;
    }

    add.onclick=function(){
        var name=this.dataset.name;
        var price=this.dataset.price;
        var img=this.dataset.img;
        cart.push({ name, price, img, quantity: quantity.value });

        localStorage.setItem("cart", JSON.stringify(cart));
        modalMessage.textContent = `${name} has been successfully added to the cart!`;
        successModal.show();
    }
    // #endregion add to cart

    // mobile sildebar
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
};
