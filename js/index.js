$(".aboutMenu").on("click", function(){
    $("section:visible").fadeOut();
    $(".heroSection").fadeIn();
})

$(".skillsMenu").on("click", function(){
    $("section:visible").fadeOut();
    $(".mySkills").fadeIn();
})

$(".workMenu").on("click", function(){
    $("section:visible").fadeOut();
    $(".myWork").fadeIn();
})

$(".workPreview").on("mouseenter", function(){
    $("section:visible").fadeOut();
    $(".myWork").fadeIn();
});

$(".myWork").on("mouseleave", function(){
    $("section:visible").fadeOut();
    $(".heroSection").fadeIn();
});

$(".skillsPreview").on("mouseenter", function(){
    $("section:visible").fadeOut();
    $(".mySkills").fadeIn();
});

$(".mySkills").on("mouseleave", function(){
    $("section:visible").fadeOut();
    $(".heroSection").fadeIn();
});


console.log("Your index.js file is loaded correctly")

/*Note: if you mouse quickly over both sections, both will register 
and show up*/