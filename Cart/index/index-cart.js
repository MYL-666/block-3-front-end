window.onload = function () {
    var totalPriceElement = document.getElementById("total-amount");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    var formlist = document.getElementsByTagName("form");
    var hint = document.getElementById("hint");
    var cartItemsContainer = document.getElementById("cart-items");
    var PI=document.getElementById("PI")

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // when cart is empty, another page be like
    if (cart.length === 0) {
        btn02.style.display = "none";
        btn03.style.display = "inline-block";
        formlist[1].action = "../../main/index/index-main.html";
        hint.style.display = "block";
    } else {
        btn02.style.display = "block";
        btn03.style.display = "none";
        hint.style.display = "none";
        PI.style.justifyContent="left"
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
                <img src="${item.img}" alt="${item.name}" style="width:50px;">
                <span>${item.name}</span>
                <span>Price: ${item.price} 💰</span>
                <span>Quantity: ${item.quantity}</span>
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
            renderCart(); 
        }
        // if everything is removed, show nothin page
        if (cart.length === 0) {
            btn02.style.display = "none";
            btn03.style.display = "inline-block";
            formlist[1].action = "../../main/index/index-main.html";
            hint.style.display = "block";
            hint.style.margin="0 auto"
        }
    });

    renderCart(); 
};
