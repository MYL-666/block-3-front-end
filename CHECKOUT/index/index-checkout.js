window.onload=function(){
    var cartItemsContainer = document.getElementById("cartItemsContainer");
    var totalPrice = document.getElementById("total-amount");
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
        totalPrice.textContent = `${total.toFixed(2)}💰`;
    }
    renderCart()

    // submit the order
    document.querySelector(".submit-payment").addEventListener("click", function (i) {
        i.preventDefault();
        alert("oreder submitted!");
    });
}