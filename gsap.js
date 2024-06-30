// Common settings for similar animations
const commonSettings = {
  y: -80,
  opacity: 0,
  duration: 0.8
};

// Logo, Menu, and Toggle-Menu Animations
gsap.from(".logo", commonSettings);
gsap.from(".menu", commonSettings);
gsap.from(".toggle-menu", commonSettings);

// Home Section Animations
gsap.from("#home .home-right", {
  opacity: 0,
  y: 80,
  duration: 1.5
});

gsap.from("#home .home-left", {
  y: 300,
  opacity: 0,
  duration: 1.5
});

// Project Box Scroll Animation
gsap.from(".project-box", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".project-box",
    scroller: "body",
    start: "top 60%",    
    end: "top 55%",
    scrub: 2
  }
});

// Projects Section Animations
gsap.from("#projects", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".project-img", {
  y: -50,
  opacity: 0,
  duration: 1
});
