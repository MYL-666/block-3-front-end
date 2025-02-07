window.onload=function(){

// #region slide bar for mobile device
    // get element by id
    var menuBtn = document.getElementById("menu-btn");
    var menuContent = document.getElementById("menu-content");
    var close=document.getElementById("close")

    // Bind click event to button, when this button is clicked
    menuBtn.onclick = function () {
        // when its open,click will close; when its close, click will open
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";  // menu content hidden 
        } else {
            menuContent.style.display = "block";  //menu content show
            menuContent.style.animation="animate .5s ease-out forwards"; //show with animation
        }
    };
    // bind close button with onclick event
    close.onclick = function () {
        // when its open,click will close; when its close, click will open
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";  //mnue content close
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
       num+= parseInt(cart[i].quantity); //view all cart-products
    }
    if(num==0){
        // if the cart is empty
        cartNum.style.display="none"; //cart count hidden
    }else{
        cartNum.innerText=num; //if not empty, calculate the num 
        cartNum.style.display="block";  //and show it above the cart
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
            num++; // number increase when there is one product in cart
            cartNum.innerText=num; //let the count of product equal to cart product number
            cartNum.style.display="block";  //show the count number on the cart
            localStorage.setItem("cart", JSON.stringify(cart)); 
            modalMessage.textContent = `${name} has been successfully added to the cart!`;  // let the text in alert cahnge with different name
            successModal.show(); //show the add to cart successs alert 
        }
        // remove focus of alert,avoid the error occurs
        btnOK.addEventListener('click', () => {
            btnOK.blur();
            document.body.focus();
        });
    }
// #endregion adding the product end

//#region when hover on the product change the img
    const productImg=document.querySelectorAll(".product-imgs");
    let nameArr=["Meowth","Palkia","Hydrapple","sweetheart","Gengar","Eevee"]; //put all img name in an Arr
    //when mouse hover on it, change the pic direction by change the img of it
    productImg.forEach((img, index) => {
        // for each images bind an onclick event
        img.addEventListener("mousemove", function() {
            img.src = `../img/${nameArr[index]}2.jpg`; //change the src of the img by using the Arr above
        });
    
        img.addEventListener("mouseleave", function() {
            img.src = `../img/${nameArr[index]}.jpg`; //when mouse leave the pic, change back
        });
    });
// #endregion changing img end

//#region going to detail product page
    var pikachu=document.getElementById("pikachu");
    pikachu.onclick=function(){
        // when click pikachu img, turn to the pikachu-product page
        window.location.href="../../product/index/index-product.html";
    }
// #endregion


//#region mobile slide bar
    var open=document.querySelectorAll(".btn-open")
    var details=document.querySelectorAll(".menu-detail")
    for(let i=0;i<open.length;i++){
        //make sure it is close at first
        details[i].style.display = "none";
        // for all section in mobile slide bar bind an onlick event
        open[i].onclick=function(){
            //when click, show it, if already shown,it will close
            if (details[i].style.display === "block") {
                details[i].style.display = "none"; //detail nav will hide when its already open
                open[i].style.transform="rotate(0deg)" // change the deg to make the arrow back to position
            } else {
                details[i].style.display = "block"; //detail nav will show when its close and clicked
                open[i].style.transform="rotate(90deg)"; // change the degree of arrow to make it towards to bottom
            }
        }
    }
// #endregion


    // #region turning the card start
    const cardList=document.querySelectorAll(".card-box");
    const cover=document.querySelectorAll(".cover");
    const back=document.querySelectorAll(".back");
    
    // when clicking the each of the card, they will start the animation of turning
    cardList.forEach((cards,index)=>{
        cards.addEventListener("click",function(){
            cover[index].style.animation="turn-cover .5s ease-in-out forwards"; // cover card turning
            back[index].style.animation="turn-back .5s ease-in-out forwards"; //back of card turning
        });
    })
    // #endregion turning card end
    


}


    // scrolling animation,when scroll down to 85%, the animation will start
        window.addEventListener('scroll', () => {
            // for all the label that have `.section` class
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                //when the scroll height is less than 85%
                if (rect.top < window.innerHeight * 0.85) {
                    // add a class of `.visible`
                    section.classList.add('visible');
                }
            });
        });
        
