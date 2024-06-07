gsap.from(".container1 .box", {
    scale:0,
    rotation: 360,
    borderRadius:"50%",
    duration: 1,
})
gsap.from(".container2 .box", {
    scale:0,
    rotation: 360,
    borderRadius:"50%",
    duration: 1,
    scrollTrigger:{
        trigger:".container2 .box",
        scroller:"body",
        // start:"top 80%",
        // end:"bottom 50%",
        scrub: true,
        // markers:true
    }
})
gsap.from(".text1", {
    opacity:0,
    x:200,
    duration:0.5,
    scrollTrigger:{
        trigger:".text1",
        scroller:"body",
        start:"top 80%",
        end:"bottom 50%",
        scrub:2,
        // markers:true
    }
    
})
gsap.from(".text2", {
    opacity:0,
    x:-200,
    duration:0.5,
    scrollTrigger:{
        trigger:".text1",
        scroller:"body",
        start:"top 80%",
        end:"bottom 50%",
        scrub:2,
        // markers:true
    }
    
})

gsap.to(".container4 .highLight",{
    transform: "translateX(-170%)",

    scrollTrigger:{
        trigger:"#container4",
        scroller:"body",
        start:"top 0%",
        end:"bottom -80%",
        pin:true,
        scrub:2,
        // markers:true
    }
})



gsap.from("h1",{
    opacity:0,
    y:5,
    duration:0.5,
    delay:0.2
})


