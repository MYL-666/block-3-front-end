window.onload=function(){
    var cartItemsContainer = document.getElementById("cartItemsContainer");
    var totalPrice = document.getElementById("total-amount");
    var discount=document.getElementById("discount");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // double check of cart
    function renderCart() {
        cartItemsContainer.innerHTML = ""; 
        let total = 0.00; 
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
            <div class="added">
                <img src="${item.img}" alt="${item.name}" style="width:50px;">
                <span>${item.name}</span>
                <span>Price: ${item.price} 💰</span>
                <span>Quantity: ${item.quantity}</span>
            </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;            
        });
        // if total amount > 300. the discount will apply
        if(total>=300){
            let total2=total*0.9
            discount.innerText="-10% 💰";
            // creat an element to show the actual price
            let span=document.createElement("span");
            span.innerHTML=total2.toFixed(2)+" 💰";
            totalPrice.parentElement.appendChild(span);
            totalPrice.style.textDecoration="line-through"
            totalPrice.textContent = `${total.toFixed(2)}💰`;
        };
        totalPrice.textContent = `${total.toFixed(2)}💰`;
    }
    renderCart()

    // submit the order
   var submit=document.getElementById("submit-order");
   submit.onclick=function(){
    localStorage.removeItem("cart");
    cartNum.style.display="none";   
    cartItemsContainer.style.display="none";
    totalPrice.innerText="0.00 💰"
   }



    // show the quantity in cart
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
}