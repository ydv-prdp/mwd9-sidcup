var cursor =  document.querySelector("#cursor");
var cursorblur =  document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";

})
document.addEventListener("mousemove", function(dets){
    cursorblur.style.left = dets.x -200 +"px";
    cursorblur.style.top = dets.y -200 +"px";

})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})