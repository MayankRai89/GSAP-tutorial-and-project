// function breakText() {
//   var h1 = document.querySelector("h1");
//   var h1Text = h1.textContent;

//   var splitedText = h1Text.split("");
//   var clutter = "";

//   splitedText.forEach(function (elem) {
//     clutter += `<span>${elem}</span>`;
//   });

//   h1.innerHTML = clutter;
// }

// breakText();

// gsap.from("h1 span", {
//   y: 70,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.5,
//   stagger: 0.15,
//   //   ease: "power3.out",
// });

function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakTheText();

gsap.from("h1 .a", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.05,
  //   ease: "power3.out",
});

gsap.from("h1 .b", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.05,
  //   ease: "power3.out",
});
