var main = document.querySelector("main");
var cursor = document.querySelector("#cursor");
var img = document.querySelector("#img");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

img.addEventListener("mouseenter", function () {
  cursor.innerHTML = "<span class='gradient-text'>View</span>";
  gsap.to(cursor, {
    scale: 4,
    duration: 0.3,
  });
});

img.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
  });
});
