gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

var tl = gsap.timeline();

tl.to(".first-name", {
  x: 150,
  opacity: 0.5,
  duration: 1,
  yoyo: true,
  repeat: 1,
});

tl.to(
  ".last-name",
  {
    x: -150,
    opacity: 0.5,
    duration: 1,
    yoyo: true,
    repeat: 1,
  },
  "-=2"
);

tl.to(".overlay", {
  height: document.querySelector(".hero").offsetHeight,
  duration: 1,
});

gsap.to(".first-name", {
  x: -150,
  opacity: 0.5,
  duration: 4,
  scrollTrigger: {
    trigger: ".hero",
    start: "top",
    end: "bottom 80%",
    scrub: 2,
  },
});

gsap.to(".last-name", {
  x: 150,
  opacity: 0.5,
  duration: 4,
  scrollTrigger: {
    trigger: ".hero",
    start: "top",
    end: "bottom 80%",
    scrub: 2,
  },
});

// gsap.to("#move-right",{
//     x:450,
//     opacity:0.5,
//     duration:6,
//     scrollTrigger:{
//         trigger:".skills",
//         start:"",
//         end:"bottom 80%",
//         scrub:2,
//     }
// });

// gsap.to("#move-left",{
//     x:-350,
//     opacity:0.5,
//     duration:6,
//     scrollTrigger:{
//         trigger:".skills",
//         start:"",
//         end:"bottom 80%",
//         scrub:2
//     }
// });

gsap.to(".pyramid", {
  rotate: 360,
  opacity: 1,
  // repeat:-1,
  // yoyo:true,
  motionPath: {
    path: [
      { x: -10, y: 800 },
      // { x: 50, y: 250 },
      { x: -700, y: 1480 },
      { x: -350, y: 1600 },
      { x: -680, y: 1850 },
      // { x: -200, y: 600 },
      // { x: -500, y: 600 },
      // { x: 300, y: 650 },
      { x: -1000, y: 1900 },
      { x: -500, y: 2000 },
      // { x: -300, y: 850 },
      { x: -200, y: 2500 },
      { x: 0, y: 3000 },
      // {x:-100,y:1200},

      // {x:-800,y:1550},
      //    {x:0,y:1200},
      //  {x:-100,y:1300},
      //  {x:-600,y:1800},
      //  {x:-400,y:1850},
      //  {x:200,y:1900},
      //  {x:0,y:2050},
      //  {x:800,y:2200},
      //  {x:-300,y:2500},
      //  {x:-500,y:2600},
      //  {x:-700,y:2800},
      //  {x:0,y:3000},
      //  {x:200,y:3500},
      //  {x:400,y:3560},
      //   potfolio
      //   {x:-500,y:3400},
      //   {x:0,y:3600},

      //  {x:-500,y:3650},
      //    {x:0,y:3700},
      //   {x:600,y:3800},
      //   {x:650,y:4200},
      //   {x:-400,y:4000},
      //  {x:-600,y:4500},
      //   {x:-200,y:5000},
      // {x:-400,y:5300},
      //  {x:-600,y:5800},
      //  {x:0,y:6000},
      //  {x:200,y:6400},
      //  {x:400,y:6850},

      //  {x:-300,y:7500},
      //  {x:0,y:7800},
      //  {x:100,y:8400},
    ],
  },
  scrollTrigger: {
    trigger: ".hero",
    start: "top",
    endTrigger: ".about-intro",
    end: "bottom",
    scrub: 1,
  },
});

// hero overlay hide left

gsap.to(".overlay-left", {
  x: -document.querySelector(".overlay").offsetWidth,
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay-left",
    start: "top",
    end: "bottom",
    scrub: 0.5,
  },
});

gsap.to(".overlay-skills", {
  x: -document.querySelector(".overlay").offsetWidth,
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay-skills",
    start: "top",
    end: "bottom",
    scrub: 0.5,
  },
});

gsap.to(".overlay-right", {
  x: document.querySelector(".overlay").offsetWidth,
  duration: 1,
  scrollTrigger: {
    trigger: ".overlay-right",
    start: "top",
    end: "bottom",
    scrub: 0.5,
  },
});

//project images move right
// gsap.to("#portfolio-one img",{
//     x:document.querySelector('#portfolio-one').offsetWidth,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#portfolio-one",
//         start:"top",
//         end:"bottom",
//         scrub:0.5,

//         ease:Circ.easeOut
//     }
// });

// gsap.to("#portfolio-two img",{
//     x:document.querySelector('#portfolio-two').offsetWidth,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#portfolio-two",
//         start:"top",
//         end:"bottom",
//         scrub:0.5,

//         ease:Circ.easeOut
//     }
// });

// gsap.to("#portfolio-three img",{
//     x:document.querySelector('#portfolio-three').offsetWidth,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#portfolio-three",
//         start:"top",
//         end:"bottom",
//         scrub:0.5,

//         ease:Circ.easeOut
//     }
// });

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".horizontal-container",
//       pin: true,
//       pinSpacing:false,
//        scrub: 0.8,
//       snap: 1 / (sections.length - 1),
//       markers:true,
//       // base vertical scrolling on how wide the container is so it feels more natural.
//       end: () => "+=" + document.querySelector(".horizontal-container").offsetWidth
//     }
//   });

//   skills images

gsap.to(".html-image", {
  duration: 1,
  x: -50,
  y: -50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".php-image", {
  duration: 1,
  x: -50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".grid-image", {
  duration: 1,
  x: -50,
  y: 50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top 20%",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".css-image", {
  duration: 1,
  x: 50,
  y: -50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top 20%",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".bs-image", {
  duration: 1,
  x: 50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top 20%",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".shopify-image", {
  duration: 1,
  x: 50,
  y: 50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top 20%",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".js-image", {
  duration: 1,
  y: -50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top 20%",
    end: "bottom",
    scrub: 1,
  },
});
gsap.to(".sql-image", {
  duration: 1,

  y: 50,
  scrollTrigger: {
    trigger: ".skills-description",
    start: "top 20%",
    end: "bottom",
    scrub: 1,
  },
});

// portfolio images

gsap.to(".project-one", {
  duration: 5,

  y: -100,
  scrollTrigger: {
    trigger: ".project-one-trigger",
    start: "top 2%",
    end: "bottom 100%",
    scrub: 3,
  },
});

gsap.to(".project-two", {
  duration: 5,

  y: -100,
  scrollTrigger: {
    trigger: ".project-two-trigger",
    start: "top 2%",
    scrub: 3,
    end: "bottom 100%",
  },
});

gsap.to(".project-three", {
  duration: 5,

  y: -100,
  scrollTrigger: {
    trigger: ".project-three-trigger",
    start: "top 2%",
    end: "bottom 100%",
    scrub: 3,
  },
});

gsap.to(".project-four", {
  duration: 5,

  y: -100,
  scrollTrigger: {
    trigger: ".project-four-trigger",
    start: "top 2%",
    end: "bottom 100%",
    scrub: 3,
  },
});

gsap.to(".project-five", {
  duration: 5,

  y: -100,
  scrollTrigger: {
    trigger: ".project-five-trigger",
    start: "top 2%",
    end: "bottom 100%",
    scrub: 3,
  },
});

gsap.to(".project-six", {
  duration: 5,

  y: -100,
  scrollTrigger: {
    trigger: ".project-six-trigger",
    start: "top 2%",
    end: "bottom 100%",
    scrub: 3,
  },
});
gsap.to(".skill-line", {
  duration: 2,

  y: -100,
  scrollTrigger: {
    trigger: ".skill-description",
    start: "top 2%",
    end: "bottom 100%",
    scrub: 4,
  },
});
gsap.to(".skill-set", {
  duration: 2,

  y: -100,
  scrollTrigger: {
    trigger: ".skill-description",
    start: "top 2%",
    end: "bottom 100%",
    scrub: 4,
  },
});
