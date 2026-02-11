// gsap.to("#box1", {
//   x: 500,
//   duration: 2,
//   delay: 1,
// });
// gsap.from("#box2", {
//   x: 500,
//   duration: 2,
//   delay: 1,
// }); 




// gsap.to("#box1", {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   rotate:360,
//   backgroundColor: "red",
//   borderRadius: "50%",
//   scale:0.5,
//   repeat:-1,
//   yoyo:true, 
// });
// gsap.from("#box2", {
//   x: 500,
//   duration: 2,
//   delay: 1,
// }); 




// timeline:-----------

var tl = gsap.timeline()
tl.to("#box1",{
    x: 500,
    duration: 2,
    delay: 1,
    rotate:360,
})
tl.to("#box2",{
    x: 500,
    duration: 2,
    rotate:360,
})