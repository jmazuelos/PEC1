document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("top").classList.toggle("top");
    document.getElementById("middle").classList.toggle("middle");
    document.getElementById("bottom").classList.toggle("bottom");
    if ($("#menu").is(":visible")) $("#menu").hide();
    else $("#menu").show();
});

//# sourceMappingURL=index.aa69868b.js.map
