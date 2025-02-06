window.onload = function () {
// #region slideshow
    var index = 0; 
    var imgArr = document.querySelectorAll(".imgList li");
    var prevBtn = document.querySelector('.prev'); 
    var nextBtn = document.querySelector('.next'); 
    var allA = document.querySelectorAll(".nav-dots a"); 

    // initailize the carousel
    function init() {
        index = 0; 
        setA(); 
    }
    init();
 
    // click prebtn lead to previous page
    prevBtn.onclick = function () {
        index--; 
        if (index < 0) index = imgArr.length - 1; 
        setA();
    };
    // click nextBtn lead to next page
    nextBtn.onclick = function () {
        index++; 
        if (index >= imgArr.length) index = 0; 
        setA();
    };

    // let all the node can be clicked, and when click going to its own number's slide
    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            index = this.num; 
            setA();
        };
    }
    // make a funciton about how carousel work, by controling slides' opacity and z-index
    function setA() {
        for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].style.opacity = "0"; 
            imgArr[i].style.zIndex = "0"; 
            allA[i].style.backgroundColor = ""; 
        }
        imgArr[index].style.opacity = "1"; 
        imgArr[index].style.zIndex = "1"; 
        allA[index].style.backgroundColor = "black"; 
    }
// #endregion slideshow end


//#region description and details and reviews;
    var detailDescription=document.getElementById("detail-description");
    var btnDescription=document.getElementById("btn-description");
    var details=document.getElementById("details")
    var btnDetail=document.getElementById("btn-detail")
    var delivery=document.getElementById("delivery")
    var btnDelivery=document.getElementById("btn-delivery")
    var btnComment=document.getElementById("btn-comment")
    var commentList=document.getElementById("comment-list")

    show(detailDescription,btnDescription)
    show(details,btnDetail);
    show(delivery,btnDelivery)
    show(commentList,btnComment)
    // make a function to handle multiple usage
    function show(name,btn){
        // when click,show the detail, if its alredy shown then close it
        name.style.display="none"
        btn.onclick=function(){
            if(name.style.display=="none"){
                name.style.display="block";
                btn.innerText="-";
            }else{
                name.style.display="none";
                btn.innerText="+";
            }
        }
    }
// #endregion description end



// #region write comment start
    // get the value of comments'title,username and details
    const userName=document.getElementById("user-name");
    const commentTitle=document.getElementById("comment-title");
    const newComment=document.getElementById("new-comment");
    const stars=document.querySelectorAll(".stars");
    const submitBtn=document.getElementById("submit-comment");

    // submit the comment when click it 
    submitBtn.onclick=function(){
        var newMessage=document.createElement("article");
        let i=0;
        let commentStar='';
        if(userName.value===''){
            userName.value="unknown";
        };
        stars.forEach(star => {
            if(star.checked){
                i=parseInt(star.value);
            }
        });
        for(var j=0;j<i;j++){
            commentStar+='<i class="iconfont icon-wuxinghaoping-quan"></i>';
        };
        // creat a html label to store the new comments details
        newMessage.classList.add("row","comments");
        newMessage.innerHTML=`
        <ul class="col-4 date">
            <li><span>${getCurrentTime()}</span></li>
            <li><span>${commentStar}</span></li>
            <li><h5>${commentTitle.value}</h5></li>
        </ul>
        <p class="col-6">${newComment.value}</p>
        <div class="person col-2">
            <div class="face face5"></div>
            <p>${userName.value}</p>
        </div>`;
        // insert the new comment into the page
        commentList.insertBefore(newMessage,commentList.firstChild);
        // clear textarese and everything
        userName.value='';
        commentTitle.value='';
        newComment.value = '';
        stars.forEach(star => star.checked = false);

    }
    // get the time function
    function getCurrentTime(){
        var now=new Date();
        var year=now.getFullYear();
        var month=('0'+(now.getDate()-1)).slice(-2);
        var day=('0'+now.getDate()).slice(-2);
        return day+'/'+month+'/'+year;
    }
// #endregion write comment end



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

// #region add to cart
    var add=document.getElementById("add");
    var decrease=document.getElementById("decrease");
    var increase=document.getElementById("increase");
    var quantity=document.getElementById("quantity");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    var successModal = new bootstrap.Modal(document.getElementById("successModal"));
    var modalMessage = document.getElementById("modalMessage");
    var cartNum=document.getElementById("cart-num");
    var num=0
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

    // change the quantity of the product to add
    var j=quantity.value
    decrease.onclick=function(){
        if(j!=1){
            j--;
            quantity.value=j;
        }else{
            j=1;
        }
    }
    // when click update the quantity of the product
    increase.onclick=function(){
        j++;;
        quantity.value=j;
    }

    // add the pikachu to cart with specific quantity
    add.onclick=function(){
        var name=this.dataset.name;
        var price=this.dataset.price;
        var img=this.dataset.img;
        cart.push({ name, price, img, quantity: quantity.value });

        num+=parseInt(j);    //whole cart num update
        cartNum.innerText=num;  //change the number of cart to show
        cartNum.style.display="block";  //show the cart number
        localStorage.setItem("cart", JSON.stringify(cart));
        modalMessage.textContent = `${name} has been successfully added to the cart!`;
        successModal.show();
    }
// #endregion add to cart

//#region mobile sildebar
    var open=document.querySelectorAll(".btn-open")
    var details=document.querySelectorAll(".menu-detail")
    for(let i=0;i<open.length;i++){
        details[i].style.display = "none";
        open[i].onclick=function(){
            // if its close then open, if its open then close
            if (details[i].style.display === "block") {
                details[i].style.display = "none"; 
                open[i].style.transform="rotate(0deg)" //change the arrows direction
            } else {
                details[i].style.display = "block"; 
                open[i].style.transform="rotate(90deg)" //change back
            }
        }
    }
// #endregion mobile slidebar
};
