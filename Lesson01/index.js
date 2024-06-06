
gsap.to(".box01", {
    x:900,
    duration: 2,
    delay:1,
})
gsap.to(".box02", {
    x:900,
    duration: 2,
    delay:1,
    rotation:360,
    borderRadius:"50%",
    backgroundColor:"red",
    repeat:2
})
gsap.to(".box03", {
    x:900,
    duration: 2,
    delay:1,
    rotation:360,
    borderRadius:"50%",
    backgroundColor:"red",
    repeat:-1,
    yoyo:true,
    scale:1.2
})
gsap.to(".box", {
    y:-60,
    duration: 1,
    delay:1,
    rotation:360,
    borderRadius:"50%",
    backgroundColor:"red",
    repeat:-1,
    yoyo:true,
    scale:1.2,
    stagger:0.5
})

const tl = gsap.timeline();

tl.from("h1",{
    opacity:0,
    y:5,
    duration:0.5,
    delay:0.2
})

tl.from(".nav-item",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.5,
    

})
