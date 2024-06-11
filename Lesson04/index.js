const text = document.getElementById("main").innerText;

const splitText = text.split("");
let temp = "";
splitText.forEach((element) => {
  temp += `<span>${element}</span>`;
});

document.getElementById("main").innerHTML = temp;

gsap.from("#main span", {
  y: 10,
  opacity: 0,
  yoyo: true,
  repeat: -1,
  stagger: 0.2,
  ease: "elastic",

  // stagger:{
  //     each: 0.5,
  //     from: 'center',
  //     grid: "auto",
  //     ease: 'bounce',
  //     // repeat: -1
  // },
  duration: 1,
});

gsap.to(".box", {
  duration: 1,
  scale: 0.1,
  y: 60,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  stagger: {
    amount: 1.5,
    grid: "auto",
    axis: "x",
    ease: "power1.inOut",
    from: "center",
  },
});

gsap.from("h1", {
  opacity: 0,
  y: 5,
  duration: 0.5,
  delay: 0.2,
});
