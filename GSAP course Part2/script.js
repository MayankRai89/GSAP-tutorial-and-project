var initialpath = `M 10 100 Q 250 100 490 100`;
var finalpath = `M 10 100 Q 250 100 490 100`;
var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  var rect = string.getBoundingClientRect();
  path = `M 10 100 Q ${dets.x - rect.left} ${dets.y - rect.top} 490 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.5,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: finalpath },
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
  });
});
