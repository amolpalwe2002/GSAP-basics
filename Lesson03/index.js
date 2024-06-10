
const container = document.getElementById("container");

container.addEventListener("mousemove", (dets) => {
    const path = `M 50 100 Q ${dets.x} ${dets.y} 950 100`;
    gsap.to("svg path", {
        attr:{
            d:path
        },
        ease: "power3.out",
    })
})



container.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr:{
            d:"M 50 100 Q 500 100 950 100"
        },
        duration:1.5,
        ease: "elastic(1, 0.2)"
    })
})

document.getElementById("overlay").addEventListener("mousemove", (e) => {

    gsap.to("#cursor", {
        opacity:1,
        x:(e.clientX-0),
        y:e.clientY-280,
        ease: "power2.out",
        duration:0.5
    })
})
    



gsap.from("h1",{
    opacity:0,
    y:5,
    duration:0.5,
    delay:0.2
})

const tl = gsap.timeline({paused:true});

tl.from("#menu", {
    x: "100%",
    duration: 0.5,
    ease: "power2.out",
})

tl.from("p", {
    y: 10,
    opacity:0,
    duration:0.3,
    stagger: 0.2,
    ease: "power2.out",

})
document.getElementById("start").addEventListener("click", () => {
    tl.play();   

})


document.getElementById("close").addEventListener("click", () => {
    tl.reverse(); 

})


