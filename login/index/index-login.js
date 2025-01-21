window.onload=function(){
    // get all the buttons and checkbox
    var btn = document.getElementById("btn");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    var instruction = document.getElementById("instructions");
    var show =document.getElementById("show");
    // banding the onclick event to the "instruction"
    show.onclick=function(){
        instruction.style.display="block"
    }
    // binding the onscroll event to "instruction" so that only read all the 
    // instruction the button can be clicked
    instruction.onscroll=function(){
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
      
}