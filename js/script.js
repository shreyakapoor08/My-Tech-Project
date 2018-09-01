window.onload=function(){
    console.log('hello');
    var header = document.getElementById("header");
    var menuToggle = document.getElementById("toggle");
    
    menuToggle.addEventListener("click",function(){
        
       if(header.className === "open"){
           header.className = "";
       }else{
           header.className = "open";
       }
    })
};


     