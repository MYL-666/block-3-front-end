window.onload = function () {
    // #region========================== SHow the products in Cart ====================================
        var totalPriceElement = document.getElementById("total-amount");
        var btn02 = document.getElementById("btn02");
        var btn03 = document.getElementById("btn03");
        var formlist = document.getElementsByTagName("form");
        var hint = document.getElementById("hint");
        var cartItemsContainer = document.getElementById("cart-items");
        var PI=document.getElementById("PI");
        var cartNum=document.getElementById("cart-num");
        // Retrieve cart data from localStorage, or initialize an empty array if it doesn't exist
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // when cart is empty, another page be like
        function Update(){
            if (cart.length === 0) {
                btn02.style.display = "none"; // Hide checkout button
                btn03.style.display = "inline-block"; // Show back-to-product button
                formlist[1].action = "../../main/index/index-main.html"; // Redirect back to main page
                hint.style.display = "flex"; // Display empty cart message
                cartItemsContainer.style.display="none";  // Hide cart items
                cartNum.style.display="none"; // Hide cart count indicator
            } else {
                btn02.style.display = "block"; // Show checkout button
                btn03.style.display = "none";// Hide back-to-product button
                hint.style.display = "none";// Hide empty cart message
                PI.style.justifyContent="left";// Align cart content to the left
                cartItemsContainer.style.display="flex";// Show cart items
                cartNum.innerText=cart.length;// Update cart count indicator
                cartNum.style.display="block";// Show cart count indicator
            }
        }
    
        // add the product to cart
        function renderCart() {
            cartItemsContainer.innerHTML = ""; // Clear previous cart content
            // Initialize total cost
            let total = 0.00; 
            cart.forEach((item, index) => {
                // Create a new div for each cart item
                const itemElement = document.createElement("div");
                itemElement.classList.add("cart-item");
                // add the html of the product
                itemElement.innerHTML = `
                <div class="added">
                    <img src="${item.img}" alt="${item.name}">
                    <span>${item.name}</span>&nbsp;&nbsp;
                    <span><i class="iconfont icon-qian"></i>: ${item.price}</span>&nbsp;&nbsp;
                    <span class=quantity>
                        <button class='decrease' data-index="${index}">-</button>
                        <span class='newQ'>${item.quantity}</span> 
                        <button class='increase' data-index="${index}">+</button></span>&nbsp;&nbsp;
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
                `;
                // Append the new cart item to the container
                cartItemsContainer.appendChild(itemElement);
                total += item.price * item.quantity; // Calculate total cost
                
            });
            totalPriceElement.textContent = `${total.toFixed(2)}`; // Update total price display
            // #region ==================== Add & delete ==============================
            let increase = document.querySelectorAll(".increase");
            let decrease = document.querySelectorAll(".decrease");

            increase.forEach(button => {
                button.onclick = function () {
                    let index = this.getAttribute("data-index"); //get this cart's information
                    cart[index].quantity++; //this product's quantity increase
                    localStorage.setItem("cart", JSON.stringify(cart)); //update to localStorage
                    renderCart(); //update the cart
                };
            });

            decrease.forEach(button => {
                button.onclick = function () {
                    let index = this.getAttribute("data-index");//get this cart's information
                    if (cart[index].quantity > 1) {
                        cart[index].quantity--; //this product's quantity decrease
                    } else {
                        cart[index].quantity = 1; //the minimal amount is 1
                    }
                    localStorage.setItem("cart", JSON.stringify(cart)); //update to localStorage
                    renderCart();//update the cart
                };
            });
            // #endregion add & delete
            Update(); // update the show
        }
    
        
    
    //#region===================================== remove the product ==================================================
        //Listens for a click event on the cart items container
        cartItemsContainer.addEventListener("click", (e) => {
            // Checks if the clicked element is a "Remove" button
            if (e.target.classList.contains("remove-btn")) {
                const index = e.target.dataset.index; //Retrieves the index of the item to be removed
                cart.splice(index, 1); //Removes the item from the cart array
                localStorage.setItem("cart", JSON.stringify(cart)); // update localStorage
                cartNum.innerText=cart.length; //Updates the cart number display
                renderCart();  //Rerenders the cart UI after removing the item
            }
            // if everything is removed, show nothin page
            if (cart.length === 0) {
                btn02.style.display = "none"; //Hide the checkout button since there are no items left
                btn03.style.display = "inline-block"; //Show "Back to Product" button to guide users back
                formlist[1].action = "../../main/index/index-main.html";
                cartItemsContainer.style.display="none";  //Hide the cart items container since it's empty
                hint.style.display = "flex"; //Show the empty cart hint message
                hint.style.margin = "0 auto"; //text in the center
                cartNum.style.display="none"; // Hide the cart number bubble
            }
        });
    // #endregion remove signal product end
    
        renderCart(); 
    // #endregion show product in cart end
    
       
    // #region====================================== remove all btn ====================================================
       document.getElementById("remove-all").onclick=function(){
        // confirm remove all or not
        if (confirm("Are you sure you want to remove all items from the cart?")) {
            // clear the cart
            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            // same as above remov logic
            cartItemsContainer.innerHTML = ""; //Updates localStorage so that the cart remains empty even after a page refresh
            totalPriceElement.textContent = "0.00"; //Clears the cart items displayed in the UI
            btn02.style.display = "none"; //Resets the total price to 0 since no items are left in the cart
            btn03.style.display = "inline-block"; //Hides the "Checkout" button as the cart is empty
            formlist[1].action = "../../main/index/index-main.html"; //Displays the "Back to Product" button so users can continue shopping
            hint.style.display = "flex"; //Redirects the "Back to Product" button to the main product page
            hint.style.margin = "0 auto"; //make sure text is central
            cartItemsContainer.style.display = "none"; //Hides the cart item count bubble
            cartNum.style.display = "none"; //Hides the cart item container since there are no products
        } 
       }
    //    #endregion remove all btn end
    
    
    
  //#region============================================== mobile slide bar ===============================================
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
    };
    