let reviewTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".main_review ",
    start: "0% 50%",
    end: "100% 40%",
    toggleActions: "restart none none reverse",
  },
});

reviewTimeline
  .from(".main_review ", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: Linear.easeNone,
  })
  .from(".side_review", {
    opacity: 0,
    duration: 1,
    ease: Linear.easeNone,
  });

//武俠片策展
let fes1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#fes_1",
    start: "0% 50%",
    end: "+=480 40%",
    toggleActions: "restart none none reverse",
    duration: 3,
  },
});

fes1Timeline
  .from("#fes_1", {
    opacity: 0,
    x: -200,
    duration: 1,
    ease: Linear.easeNone,
  })
  .from(["#fes_1 .fes_title,#fes_1 .fes_anime"], {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: Linear.easeNone,
  })
  .from("#list_1", {
    opacity: 0,
    x: 200,
    duration: 1,
    ease: Linear.easeNone,
  });

//文青片策展
let fes2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#fes_2",
    start: "0% 60%",
    end: "+=480 100%",
    toggleActions: "restart none none reverse",
  },
});

fes2Timeline
  .from("#fes_2 ", {
    opacity: 0,
    duration: 1,
    ease: Linear.easeNone,
  })
  .from(["#fes_2 .fes_title", "#fes_2 .fes_anime"], {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: Linear.easeNone,
  })
  .from("#list_2", {
    delay: 0.2,
    opacity: 0,
    duration: 1,
    ease: Linear.easeNone,
  });
