// Mouse follower
function mouseFollower() {
    // mouse following cursor animation
    var mouseFollower = document.querySelector(".mouse-follower");
    window.addEventListener("mousemove", function (dtls) {
        mouseFollower.style.opacity = 1;
        gsap.to(".mouse-follower",{
            left : dtls.clientX,
            top : dtls.clientY,
        })
        

    })
    // video entering animation of mouse 
    var video = document.querySelector(".page-2 video");
    var mouseFollowerText= document.querySelector(".mouse-follower h1");
    video.addEventListener("mousemove", function () {
        mouseFollower.style.scale = 15;
        mouseFollowerText.style.opacity = 1
        video.style.filter = "grayscale(0)"
        mouseFollower.style.mixBlendMode = "normal";
    })
    video.addEventListener("mouseleave", function () {
        mouseFollower.style.scale = 1;
        mouseFollowerText.style.opacity = 0
        video.style.filter = "grayscale(01)"
        mouseFollower.style.mixBlendMode = "difference"
    })


}
mouseFollower();

// page-1 starts from here
function pageLoadingAnim() {

    var pageloader = document.querySelectorAll(".pageloader");
    setTimeout(function () {
        pageloader.forEach(function (element) {
            element.style.transform = `translateY(${-100}%)`;
        })
    }, 2000);
    var centertext = document.querySelector(".pageloader #center-box");
    setTimeout(function () {
        centertext.style.transform = `translateY(${-11.3}vh)`;

    }, 1000);
}
pageLoadingAnim();

// button
function buttonAnim() {
    var text = document.querySelectorAll(".page-1 .btn h1");
    var btn = document.querySelector(".btn");

    btn.addEventListener("mouseenter", function () {
        btn.style.transform = `scale(1.1)`;
        text.forEach(function (element) {
            element.style.transform = `translateY(-10vh)`;
        })
        btn.addEventListener("mouseleave", function () {
            btn.style.transform = `scale(1)`;
            text.forEach(function (element) {
                element.style.transform = `translateY(0)`;
            })
        })
    })
}
buttonAnim();

// Landing page animation
function LandingPageAnim() {

    var heading = document.querySelectorAll(".page-1 .text-section h1");
    heading.forEach(function (elem) {
        setTimeout(() => {
            elem.style.transform = `translateY(${0}vh)`
        }, 3500);


    })
}
LandingPageAnim();
// page - 2 animation starts from here
function videoAnim() {
    var video = document.querySelector(".page-2");
    gsap.to(video, {
        scale: 1,
        scrollTrigger: {
            scroller: "body",
            trigger: ".page-2",
            start: "top 50%",
            end: "0 45%",
            scrub: 1,
            // markers : true,
        }

    })

}
videoAnim();
// page-3 Animation
function picColorChange(){
    var pics = document.querySelectorAll(".page-3 .image-container");
    var mouseFollower = document.querySelector(".mouse-follower");
    var mouseFollowerText = document.querySelector(".mouse-follower .second-text");
    pics.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.style.filter = "grayscale(0)"
            mouseFollower.style.scale = "9"
            mouseFollower.style.mixBlendMode = "normal"
            mouseFollowerText.style.display = "block"
            mouseFollowerText.style.opacity = "1"
            mouseFollower.style.backgroundColor = "aqua";
            elem.querySelectorAll(".page-3 .section-container").forEach(function(elem){
                elem.style.opacity = 1;
            });
          gsap.fromTo(elem.querySelectorAll(".year-section , .city-section"),{
            opacity : 0,
            y : 80,
          },{
            opacity : 1,
            y : 0,
          })
        })
        elem.addEventListener("mouseleave",function(){
            elem.style.filter = "grayscale(1)"
            mouseFollower.style.scale = "1"
            mouseFollowerText.style.display = "none"
            mouseFollowerText.style.opacity = "0"
            mouseFollower.style.mixBlendMode = "difference"
            mouseFollower.style.backgroundColor = "white";
            elem.querySelectorAll(".page-3 .section-container").forEach(function(elem){
                elem.style.opacity = 0;
            });
           
        })
    })
}
picColorChange();
// page-4 moving line animation
function movingLineAnim(){
    var line = document.querySelectorAll(".page-4 h1");
    line.forEach(function(elem){
        gsap.to(elem,{
            right   : 1000,
            scrollTrigger: {
                scroller : "body",
                trigger : elem,
                start : "top 100%",
                // markers : true,
                scrub : 3,
            }
        })

    })
}
movingLineAnim();
function button2Anim() {
    var text = document.querySelectorAll(".page-5 .btn h1");
    var btn = document.querySelector(".page-5 .btn");

    btn.addEventListener("mouseenter", function () {
        btn.style.scale = `1.8`;
        text.forEach(function (element) {
            element.style.transform = `translateY(-10vh)`;
        })
        btn.addEventListener("mouseleave", function () {
            btn.style.scale = `1.6`;
            text.forEach(function (element) {
                element.style.transform = `translateY(0)`;
            })
        })
    })
}
button2Anim();
// page-6 starts from here 
function linkPopUp(){
    var links = document.querySelectorAll(".page-6 .links");
    var popUpText = document.querySelector(".page-6 .links .scroller")
    links.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.querySelector(".pop-up"),{
                height : 100,
                opacity : 1,
            })
            
            // elem.querySelector(".scroller").style.transform = `translateX(-100%)`
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.querySelector(".pop-up"),{
                height : -1,
                opacity : 0,
            })
        })
    })
}
linkPopUp();