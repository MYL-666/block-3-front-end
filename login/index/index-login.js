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
            btn02.disabled=false;
            btn03.disabled = false;
        }
        btn03.onclick=function(){
            instruction.style.display="none"
        }
    }
    
    btn02.addEventListener('change', function(){
        btn.disabled = !btn02.checked;
      });
      
        // password show and hide
        // initailize the pdw to be hidden
    btnShow.style.opacity='0';
    btnHidden.style.opacity='1';
    btnShow.onclick=function(){
        // if its hidden,then show;otherwise, close
        if(btnShow.style.opacity=='1'){
            btnShow.style.opacity='0';
            btnHidden.style.opacity='1';
            pdw.type="password";
        }else{
            btnShow.style.opacity='1';
            btnHidden.style.opacity='0';
            pdw.type='text';
        }
        
    }
}