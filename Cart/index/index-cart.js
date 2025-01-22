window.onload = function () {
    var totalPriceElement = document.getElementById("total-amount");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    var formlist = document.getElementsByTagName("form");
    var hint = document.getElementById("hint");
    var cartItemsContainer = document.getElementById("cart-items");
    var PI=document.getElementById("PI")

    let cart = JSON.parse(localStorage.getItem("cart")) || []; // 获取购物车数据

    // 根据购物车状态切换按钮和提示
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

    // 渲染购物车
    function renderCart() {
        cartItemsContainer.innerHTML = ""; // 清空容器内容
        let total = 0.00; // 初始化总价
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
            <div class="added">
                <img src="${item.img}" alt="${item.name}" style="width:50px;">
                <span>${item.name}</span>
                <span>Price: ${item.price} 💰</span>
                <span>Quantity: ${item.quantity}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity; // 计算总价
        });
        totalPriceElement.textContent = `${total}`; // 更新总价显示
    }

    // 删除商品
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1); // 从购物车中移除商品
            localStorage.setItem("cart", JSON.stringify(cart)); // 更新 localStorage
            renderCart(); // 重新渲染购物车
        }
    });

    renderCart(); // 初次渲染
};
