window.onload = function () {
    var totalPriceElement = document.getElementById("total-amount");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    var formlist = document.getElementsByTagName("form");
    var hint = document.getElementById("hint");
    var cartItemsContainer = document.getElementById("cart-items");
    var PI=document.getElementById("PI");
    var cartNum=document.getElementById("cart-num");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // when cart is empty, another page be like
    if (cart.length === 0) {
        btn02.style.display = "none";
        btn03.style.display = "inline-block";
        formlist[1].action = "../../main/index/index-main.html";
        hint.style.display = "flex";
        cartItemsContainer.style.display="none";
        cartNum.style.display="none";
    } else {
        btn02.style.display = "block";
        btn03.style.display = "none";
        hint.style.display = "none";
        PI.style.justifyContent="left";
        cartItemsContainer.style.display="flex";
        cartNum.innerText=cart.length;
        cartNum.style.display="block";
    }

    // add the product to cart
    function renderCart() {
        cartItemsContainer.innerHTML = ""; 
        let total = 0.00; 
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            // add the html of the product
            itemElement.innerHTML = `
            <div class="added">
                <img src="${item.img}" alt="${item.name}">
                <span>${item.name}</span>&nbsp;&nbsp;
                <span><i class="iconfont icon-qian"></i>: ${item.price}</span>&nbsp;&nbsp;
                <span>Quantity: ${item.quantity}</span>&nbsp;&nbsp;
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
            `;
            // calculate the total cost
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity; 
            
        });
        totalPriceElement.textContent = `${total.toFixed(2)}`; //update
    }

    // remove the product
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart)); // update localStorage
            cartNum.innerText=cart.length;
            renderCart(); 
        }
        // if everything is removed, show nothin page
        if (cart.length === 0) {
            btn02.style.display = "none";
            btn03.style.display = "inline-block";
            formlist[1].action = "../../main/index/index-main.html";
            hint.style.display = "flex";
            cartItemsContainer.style.display="none";
            cartNum.style.display="none";
        }
    });

    renderCart(); 

   
    //#region  remove all btn
   document.getElementById("remove-all").onclick=function(){
    // confirm remove all or not
    if (confirm("Are you sure you want to remove all items from the cart?")) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        cartItemsContainer.innerHTML = "";
        totalPriceElement.textContent = "0.00";
        btn02.style.display = "none";
        btn03.style.display = "inline-block";
        formlist[1].action = "../../main/index/index-main.html";
        hint.style.display = "block";
        hint.style.margin = "0 auto";
        cartItemsContainer.style.display = "none";
        cartNum.style.display = "none";
    }
   }
//    #endregion remove all btn end



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
};
