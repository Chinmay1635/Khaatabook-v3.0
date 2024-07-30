var typed = new Typed('.element', {
    strings: ['Manage your expenses in a simple, notes-like format.', `Today's Saving is tomarroow's Earning!`,`Effortlessly Track Your Expenses with Khaatabook.`,`Track Every Penny Effortlessly.`],
    typeSpeed: 50,
    loop:true,
    backDelay:1000,
  });


 
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.7,
  });

  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  let tl = gsap.timeline()
  tl.from("nav div",{
    y:-100,
    delay:0.2,
    duration:1,
    opacity:0,
    stagger:0.2,
  },"page1");
  tl.from(".main-heading h1 span",{
    x:500,
    duration:2.5,
    ease: "power4.out",
    opacity:0,
    delay:0.3,
    stagger:0.2
  },"page1");

  let tl2 = gsap.timeline({scrollTrigger:{
    scroller:"body",
    trigger:"#page2",
    start:"0% 90%",
    end:"50% 40%",
    scrub:1,
    // markers:true,
}})

tl2.from(".left-feature",{
  x:-400,
  duration:2.5,
    ease: "power4.out",
    opacity:0,
    stagger:3,
},"page2")
tl2.from(".right-feature",{
  x:400,
  duration:2.5,
    ease: "power4.out",
    opacity:0,
    stagger:3,
},"page2")
  let tl3 = gsap.timeline({scrollTrigger:{
    scroller:"body",
    trigger:"#page3",
        start:"0% 90%",
        end:"150% 90%",
        scrub:1,
    // markers:true,
}})

tl3.from(".left-step",{
  x:-400,
  duration:2.5,
    ease: "power4.out",
    opacity:0,
    stagger:3,
},"page3")
tl3.from(".right-step",{
  x:400,
  duration:2.5,
    ease: "power4.out",
    opacity:0,
    stagger:5,
},"page3")