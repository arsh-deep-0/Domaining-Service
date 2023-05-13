const menu_btn = document.getElementById("menu-btn");

menu_btn.addEventListener("click",myFunction);

function myFunction(){
    
    if(window.innerWidth<743){
    //console.log(window.innerWidth);
    
    if(document.getElementById("dropdown-menu1").style.display=="flex"){
        document.getElementById("dropdown-menu1").style.animationName="disappear-to-left";
        setTimeout(function () {
            document.getElementById("dropdown-menu1").style.display="none";
        }, 500);
        
        
    }
    
    else{
    document.getElementById("dropdown-menu1").style.display="flex";
    document.getElementById("dropdown-menu1").style.animationName="appear-from-left"
    }
    
    }
}

window.addEventListener("resize", hideDropDownMenu);
function hideDropDownMenu(){
    if(window.innerWidth>743){
        document.getElementById("dropdown-menu1").style.display="none";
    }
    else{

    }
}



document.onclick=function(e){
    let clickedElementID=e.target.id;
    if( document.getElementById("list-ele-"+clickedElementID+"-submenu").style.display=="flex"
){
        document.getElementById("list-ele-"+clickedElementID+"-submenu").style.display="none";
    }
    else
    document.getElementById("list-ele-"+clickedElementID+"-submenu").style.display="flex";
}

const countdown = ()=>{

}

const sharedhosting = document.getElementById("plan-1");
const standardhosting = document.getElementById("plan-2");

sharedhosting.addEventListener("click",changePlan);
standardhosting.addEventListener("click",changePlan1);

function changePlan(){
    console.log("hi");
    document.getElementById("tranding-2").style.display="none";
    document.getElementById("tranding").style.display="block";

}


function changePlan1(){
    document.getElementById("tranding").style.display="none";
    document.getElementById("tranding-2").style.display="block";

}