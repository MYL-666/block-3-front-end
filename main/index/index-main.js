window.onload=function(){

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
            menuContent.style.animation="animate .5s ease-out forwards"
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
    var btnOK=document.getElementById("OK");
    var num=0;

    //  if there already had products in cart catnum will show
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
        // remove focus
        btnOK.addEventListener('click', () => {
            btnOK.blur();
            document.body.focus();
        });
    }
// #endregion adding the product end

//#region when hover on the product change the img
    const productImg=document.querySelectorAll(".product-imgs");
    let nameArr=["Meowth","Palkia","Hydrapple","sweetheart","Gengar","Eevee"];
    //when mouse hover on it, change the pic
    productImg.forEach((img, index) => {
        img.addEventListener("mousemove", function() {
            img.src = `../img/${nameArr[index]}2.jpg`;
        });
    
        img.addEventListener("mouseleave", function() {
            img.src = `../img/${nameArr[index]}.jpg`;
        });
    });
// #endregion changing img end

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
        //make sure it is close at first
        details[i].style.display = "none";
        open[i].onclick=function(){
            //when click, show it, if already shown,it will close
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


    // #region turning the card start
    const cardList=document.querySelectorAll(".card-box");
    const cover=document.querySelectorAll(".cover");
    const back=document.querySelectorAll(".back");
    
    cardList.forEach((cards,index)=>{
        cards.addEventListener("click",function(){
            cover[index].style.animation="turn-cover .5s ease-in-out forwards";
            back[index].style.animation="turn-back .5s ease-in-out forwards";
        });
    })
    // #endregion turning card end
    


}


    // scrolling animation,when scroll down to 85%, the animation will start
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.85) {
                    section.classList.add('visible');
                }
            });
        });
        
