window.onload=function(){

    // #region slideShow
        let index = 0;
    const slides = document.querySelectorAll(".pic");
    const shell = document.querySelector(".shell");
    const prev=document.getElementById("prev")
    const next=document.getElementById("next")

    function updateCarousel() {
        shell.style.animation = "none";
        shell.style.transform = `translateZ(-35vw) rotateY(${-index * 120}deg)`;

        setTimeout(() => {
            shell.style.animation = `carousel 9s infinite cubic-bezier(0.77,0,0.175,1) ${-index*3}s forwards`;
        }, 500);
    }

    prev.onclick=function(){
        index = (index -1 + slides.length) % slides.length;
        updateCarousel();
    }

    next.onclick=function(){
        index = (index - 2 + slides.length) % slides.length;
        updateCarousel();
    }
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
    var cartBtn=document.querySelectorAll(".add-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // success adding to cart
    var successModal = new bootstrap.Modal(document.getElementById("successModal"));
    var modalMessage = document.getElementById("modalMessage");
    var cartNum=document.getElementById("cart-num");
    var num=0;

    //  if there already had products in cart
    for(var i=0;i<cart.length;i++){
       num+= parseInt(cart[i].quantity);
    }
    if(num==0){
        cartNum.style.display="none";
    }else{
        cartNum.innerText=num;
        cartNum.style.display="block";
    }
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
            // show how many product in cart
            num++;
            cartNum.innerText=num;
            cartNum.style.display="block";
            localStorage.setItem("cart", JSON.stringify(cart));
            modalMessage.textContent = `${name} has been successfully added to the cart!`;
            successModal.show();
        }
    }
    // #endregion adding the product end


    //#region going to detail product page
    var pikachu=document.getElementById("pikachu")
    pikachu.onclick=function(){
        window.location.href="../../product/index/index-product.html"
    }
    // #endregion


    //#region mobile slide bar
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
    // #endregion

    document.addEventListener("DOMContentLoaded", function () {
        const pics = document.querySelectorAll(".mian-pic");
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated"); // 触发动画
                    observer.unobserve(entry.target); // 只触发一次，节省性能
                }
            });
        }, { threshold: 0.3 });
    
        pics.forEach(pic => observer.observe(pic));
    });
    
}
