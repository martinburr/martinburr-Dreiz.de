gsap.timeline()

    .fromTo("header", { duration: 0, opacity: 0 }, { duration: 3, opacity: 1 })
    .fromTo(".logo", { opacity: 0 }, { duration: 3, opacity: 1 })
    .fromTo(".nav_links", { opacity: 0 }, { duration: 3, opacity: 1 }, "-=3" )