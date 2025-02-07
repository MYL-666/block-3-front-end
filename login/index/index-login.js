window.onload=function(){
    // get all the buttons and checkbox
    var btn = document.getElementById("btn");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    var instruction = document.getElementById("instructions");
    var show =document.getElementById("show");
    var btnShow=document.getElementById("btn-show");
    var btnHidden=document.getElementById("btn-hidden");
    var pdw=document.getElementById("pdw");

    // banding the onclick event to the "instruction"
    show.onclick=function(){
        instruction.style.display="block"
    }
    // binding the onscroll event to "instruction" so that only read all the 
    // instruction the button can be clicked
    instruction.onscroll=function(){
        // only scroll to the end of the insturction the close btn would onlock
        if(Math.abs(instruction.scrollHeight-instruction.scrollTop-instruction.clientHeight)<1){
            btn02.disabled=false; //unlock the btn of checkbox
            btn03.disabled = false; //unlock the close btn of instruction
        }
        btn03.onclick=function(){
            instruction.style.display="none"; //show the instruction part
        }
    }
    // if checkbox not check, the submot btn will lock
    btn02.addEventListener('change', function(){
        btn.disabled = !btn02.checked; //let the checkbox buttom link to login button
      });
      
        // password show and hide
        // initailize the pdw to be hidden
    btnShow.style.opacity='0';
    btnHidden.style.opacity='1';
    btnShow.onclick=function(){
        // if its hidden,then show;otherwise, close
        if(btnShow.style.opacity=='1'){
            btnShow.style.opacity='0'; // eyes open become unvisible
            btnHidden.style.opacity='1'; // eyes close show
            pdw.type="password"; //change to pdw type to hide password
        }else{
            btnShow.style.opacity='1';
            btnHidden.style.opacity='0';
            pdw.type='text';
        }
        
    }

    // user could have more clear instruction of how to login
    btn.onclick=function(){
        // if user try to login without read instruction
        if(btn02.disabled && btn03.disabled){
            alert("Please read the instruction");
            btn.disabled=true;
        }
        if(!btn02.checked && !btn03.disabled){
            alert("Please tick the checkbox");
            btn.disabled=true;
        }
    }  
    // if login button is lock,when cilick will alert a instruction about how to unlock
    btn03.onclick=function(){
        btn.disabled=false;
    }
}