function show(){

    if(document.getElementById("menu").style.display=="none" || document.getElementById("menu").style.display=="")
    {
        document.getElementById("menu").style.display="block"
    }
    else{
        document.getElementById("menu").style.display="none"
    }
    
}
function hide(){
    document.getElementById("menu").style.display="none"
}