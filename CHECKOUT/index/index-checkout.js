window.onload=function(){
    // #region========================================================= add product to html start =============================================================
    var cartItemsContainer = document.getElementById("cartItemsContainer");
    var totalPrice = document.getElementById("total-amount");
    var discount=document.getElementById("discount");
    var span=document.createElement("span");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // double check of cart
    function renderCart() {
         cartItemsContainer.innerHTML = ""; //initailze the new container
        // claer the cart
        let total = 0.00; 
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div"); //creat a container
            itemElement.classList.add("cart-item"); //add the class to this container
            // add the cart product to html
            itemElement.innerHTML = `
            <div class="added">
                <img src="${item.img}" alt="${item.name}" style="width:50px;">&nbsp;
                <span>${item.name}</span>&nbsp;&nbsp;
                <span>Price: ${item.price} <i class="iconfont icon-qian"></i></span>&nbsp;&nbsp;
                <span>Quantity: ${item.quantity}</span>
            </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            // calculate the total prices of all products
            total += item.price * item.quantity;            
        });
        // if total amount > 300. the discount will apply
        if(total>=300){
            var total2=total*0.9
            discount.innerHTML='-10% <i class="iconfont icon-qian"></i>';
            // creat an element to show the actual price
            span.innerHTML=`${total2.toFixed(2)}<i class="iconfont icon-qian"></i>`;
            totalPrice.parentElement.appendChild(span); //apend this container to its parent
            totalPrice.style.textDecoration="line-through"; //orginal price without discount
            totalPrice.textContent = `${total.toFixed(2)}<i class="iconfont icon-qian"></i>`; //2decimal number for total price
        }
        totalPrice.innerHTML = `${total.toFixed(2)} <i class="iconfont icon-qian"></i>`; // calculate the total price
    }
    renderCart()
    // #endregion add the product to html end

    //#region============================================= submit the order ==========================================
   var submit=document.getElementById("submit-order");
   submit.onclick=function(){
    // when submit the order, evrything should be clear and the payment success animation will show
    if(cart.length>0)
    {localStorage.removeItem("cart"); //if cart is not empty,clear all products in cart
    cart.length=0;  //let the cart lenght =0
    cartNum.style.display="none";   //cart count hide
    cartItemsContainer.style.display="none"; //product in cart hide
    if(span){
        totalPrice.parentElement.removeChild(span); //remove the original price
    }
    // clear discount
    discount.innerHTML='-0% <i class="iconfont icon-qian"></i>'
    totalPrice.style.textDecoration="none"; //clear price
    totalPrice.innerHTML='0.00 <i class="iconfont icon-qian"></i>'} // clear total price
   }
    //    remove focus
   const btnClose=document.getElementById("close-btn");
   btnClose.addEventListener('click', () => {
    btnClose.blur();
    document.body.focus();
    });
    //#endregion payment success end


    //#region show the quantity in cart start
    var cartNum=document.getElementById("cart-num");
    var num=0;
    //  if there already had products in cart
    for(var i=0;i<cart.length;i++){
        num+= parseInt(cart[i].quantity);//total number of products in cart
     }
     if(num==0){
         cartNum.style.display="none";//hide the cart count,if caart is empty
     }else{
         cartNum.innerText=num; //if not empty,show the number
         cartNum.style.display="block";
     }
    //  #endregion show the quantity in cart end
}