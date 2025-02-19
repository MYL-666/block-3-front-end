window.onload = function () {
// #region========================================== slideshow =============================================
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
        if (index < 0) index = imgArr.length - 1; // if it is the first slide, then go to last slide
        setA();
    };
    // click nextBtn lead to next page
    nextBtn.onclick = function () {
        index++; 
        if (index >= imgArr.length) index = 0; // if it is the last slide, then go to first slide
        setA();
    };

    // let all the node can be clicked, and when click going to its own number's slide
    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            index = this.num; //when click nodes, show the specific slide
            setA();
        };
    }
    // make a funciton about how carousel work, by controling slides' opacity and z-index
    function setA() {
        for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].style.opacity = "0"; //initial all slides'opacity to be 0
            imgArr[i].style.zIndex = "0"; // innitilaize all slides'z-index very low
            allA[i].style.backgroundColor = ""; //initialize the nodes'color to be same
        }
        imgArr[index].style.opacity = "1"; //the showing slide opacity
        imgArr[index].style.zIndex = "1"; //the showing slide z-index
        allA[index].style.backgroundColor = "black"; //the node of that slide's number change color
    }
// #endregion slideshow end


//#region================================================= description and details and reviews ==============================================
    var detailDescription=document.getElementById("detail-description");
    var btnDescription=document.getElementById("btn-description");
    var details=document.getElementById("details")
    var btnDetail=document.getElementById("btn-detail")
    var delivery=document.getElementById("delivery")
    var btnDelivery=document.getElementById("btn-delivery")
    var btnComment=document.getElementById("btn-comment")
    var commentList=document.getElementById("comment-list")

    show(detailDescription,btnDescription); //apply the show funtion on description section
    show(details,btnDetail); //apply the show funtion on detail section
    show(delivery,btnDelivery); //apply the show funtion on delivery section
    show(commentList,btnComment); //apply the show funtion on comment section
    // make a function to handle multiple usage
    function show(name,btn){
        // when click,show the detail, if its alredy shown then close it
        name.style.display="none"
        btn.onclick=function(){
            if(name.style.display=="none"){
                name.style.display="block"; //show the name
                btn.innerText="-"; //change the button to `-`
            }else{
                name.style.display="none"; //hide the name
                btn.innerText="+"; //change the button back to`+`
            }
        }
    }
// #endregion description end



// #region======================================================= write comment start =================================================================
    // get the value of comments'title,username and details
    const userName=document.getElementById("user-name");
    const commentTitle=document.getElementById("comment-title");
    const newComment=document.getElementById("new-comment");
    const stars=document.querySelectorAll(".stars");
    const submitBtn=document.getElementById("submit-comment");

    // submit the comment when click it 
    submitBtn.onclick=function(){
        // when click submit button, get all the value in the input boxes
        var newMessage=document.createElement("article");//creat a new container for new comment
        let i=0;
        let commentStar='';//rating be 0 at first
        if(userName.value===''){
            userName.value="unknown"; //if user name doesnt have any input,let it be unknown
        };
        stars.forEach(star => {
            if(star.checked){
                i=parseInt(star.value); //the start is checked by user equal to the rating of the product
            }
        });
        for(var j=0;j<i;j++){
            commentStar+='<i class="iconfont icon-wuxinghaoping-quan"></i>'; //icons add together,the times of adding euqal to the rating of user made
        };
        // creat a html label to store the new comments details
        newMessage.classList.add("row","comments");//add the class to the newComment container
        // add the html style into the new comment
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
        // make sure the text and title have content, if not alert users
        if(commentTitle.value!=='' && newComment.value!==''){
            commentList.insertBefore(newMessage,commentList.firstChild); // insert the new comment into the page
        }else{
            alert("please input title and comments before submit"); 
            return
        }
        // clear textarese and everything
        userName.value=''; //clear username
        commentTitle.value='';//clear title
        newComment.value = ''; //clear comment detail
        stars.forEach(star => star.checked = false); //clear all stars to be unchecked

    }
    // get the time function
    function getCurrentTime(){
        var now=new Date(); //get the current time
        var year=now.getFullYear();//get the cureent year
        var month=('0'+(now.getMonth() + 1)).slice(-2);//get the current month
        var day=('0'+now.getDate()).slice(-2);//get the current day
        return day+'/'+month+'/'+year; //final,the date of writing commnet output
    }
// #endregion write comment end



    
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



// #region =========================================================== ADD to cart ========================================================
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
        num+= parseInt(cart[i].quantity); //num equal to the total quantity in cart
     }
     if(num==0){
         cartNum.style.display="none"; //if cart is empty, then car count hide
     }else{
         cartNum.innerText=num; // cart count equal to the total quantity in cart
         cartNum.style.display="block"; //show the cart count
     }

    // change the quantity of the product to add
    var j=quantity.value
    decrease.onclick=function(){
        if(j!=1){
            j--; //if not 1, when click decrease, j mines one
            quantity.value=j;
        }else{
            j=1; //if equal to 1, then stay at one
        }
    }
    // when click update the quantity of the product
    increase.onclick=function(){
        j++;; //increase the amount when clicking increase button
        quantity.value=j; //cahnge the quantity showing at the same time
    }

    // add the pikachu to cart with specific quantity
    add.onclick=function(){
        var name=this.dataset.name; //get this product name
        var price=this.dataset.price; //get this product price
        var img=this.dataset.img; //get this product img
        cart.push({ name, price, img, quantity: quantity.value }); //push them to the cart

        num+=parseInt(j);    //whole cart num update
        cartNum.innerText=num;  //change the number of cart to show
        cartNum.style.display="block";  //show the cart number
        localStorage.setItem("cart", JSON.stringify(cart));
        modalMessage.textContent = `${name} has been successfully added to the cart!`;
        successModal.show();
    }
// #endregion add to cart
};
