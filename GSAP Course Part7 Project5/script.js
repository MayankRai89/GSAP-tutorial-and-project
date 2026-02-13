function page1Animation() {
  var tl = gsap.timeline({ defaultEase: "power2.out" });

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
  });

  tl.from(
    ".centre-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3",
  );

  tl.from(
    ".centre-part1 p",
    {
      x: -100,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3",
  );

  tl.from(
    ".centre-part1 button",
    {
      // y: 20,
      opacity: 0,
      duration: 0.4,
    },
    "-=0.2",
  );

  tl.from(
    ".centre-part2 img",
    {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.8",
  );

  tl.from(
    ".section1bottom img",
    {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.12,
    },
    "-=0.3",
  );
}
page1Animation();

function page2Animation() {
  gsap.registerPlugin(ScrollTrigger);

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top 70%",
      end: "top 30%",
      scrub: 1,
    },
  });

  tl2.from(".services", {
    y: -30,
    opacity: 0,
  });
  tl2.from(".container", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -200,
      opacity: 0,
      duration: 0.6,
    },
    "anim",
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 200,
      opacity: 0,
      duration: 0.6,
    },
    "anim",
  );

  tl2.from(
    ".elem.line2.left",
    {
      x: -200,
      opacity: 0,
      duration: 0.6,
    },
    "anim2",
  );

  tl2.from(
    ".elem.line2.right",
    {
      x: 200,
      opacity: 0,
      duration: 0.6,
    },
    "anim2",
  );
}
page2Animation();

gsap.registerPlugin(ScrollTrigger);

function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%",
      end: "bottom 40%",
      scrub: 1,
      // markers: true
    },
  });

  tl3.from(".proposal-part1 h2", {
    x: -200,
    opacity: 0,
    duration: 0.6,
  });

  tl3.from(
    ".proposal-part1 p",
    {
      x: -100,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3",
  );

  tl3.from(
    ".proposal-part1 button",
    {
      opacity: 0,
      duration: 0.4,
    },
    "-=0.2",
  );

  tl3.from(
    ".proposal-part2 img",
    {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.6",
  );

  tl3.from(".casestudy", {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl3.from(
    ".case-study-box",
    {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.3",
  );

  tl3.from(
    ".case",
    {
      x: (i) => (i % 2 === 0 ? -120 : 120),
      y: 40,
      opacity: 0,
      stagger: 0.25,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.5",
  );

  tl3.from(
    ".case h4 i",
    {
      rotation: -90,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out",
    },
    "-=0.4",
  );
}

page3Animation();
gsap.to(".case-study-box", {
  scrollTrigger: {
    trigger: ".case-study-box",
    start: "bottom 50%",
    end: "bottom 10%",
    scrub: 1,
    // markers: true,
  },
  y: 80,
  opacity: 0,
});
