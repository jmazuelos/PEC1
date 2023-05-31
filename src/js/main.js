document.getElementById("hamburger").addEventListener("click",function(){
    if($("#menu").is(":visible"))
        $("#menu").hide();
    else
        $("#menu").show();
});
