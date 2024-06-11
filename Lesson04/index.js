const text = document.getElementById("main").innerText;

const splitText = text.split("");
let temp = "";
splitText.forEach(element => {
    temp += `<span>${element}</span>`
});

document.getElementById("main").innerHTML = temp;

gsap.from("#main span", {
    y:10,
    opacity:0,
    stagger: 0.2,
    ease: 'elastic',

    
    // stagger:{
    //     each: 0.5,
    //     from: 'center',
    //     grid: "auto",
    //     ease: 'bounce',
    //     // repeat: -1
    // },
    duration:1,
})


gsap.from("h1",{
    opacity:0,
    y:5,
    duration:0.5,
    delay:0.2
})