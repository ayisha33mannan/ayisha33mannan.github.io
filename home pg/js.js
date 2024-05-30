gsap.registerPlugin(ScrollTrigger);
 gsap.from('.loin', { 
    duration: 1, 
    x: '-70%', 
    scrollTrigger:{
        trigger: ".animate",
        start: "-20% center",
        end: "20% 30%",
        scrub: 2,
        // markers: true 
    }})
     
    // footer color changing background
    document.querySelector('.follow ul li:nth-child(1) a').addEventListener('mouseover', function() {
        document.querySelector('.footer').style.backgroundColor = '#316FF6';
    });
    
    document.querySelector('.follow ul li:nth-child(1) a').addEventListener('mouseout', function() {
        document.querySelector('.footer').style.backgroundColor = '#b0865f';
    });
    
    document.querySelector('.follow ul li:nth-child(2) a').addEventListener('mouseover', function() {
        document.querySelector('.footer').classList.add('gradient-bg');
    });
    document.querySelector('.follow ul li:nth-child(2) a').addEventListener('mouseout', function() {
        document.querySelector('.footer').classList.remove('gradient-bg');
        document.querySelector('.footer').style.backgroundColor = '#b0865f'; 
    });
    
    document.querySelector('.follow ul li:nth-child(3) a').addEventListener('mouseover', function() {
        document.querySelector('.footer').style.backgroundColor = '#fff';
    });
    document.querySelector('.follow ul li:nth-child(3) a').addEventListener('mouseout', function() {
        document.querySelector('.footer').style.backgroundColor = '#b0865f';
    });
    
    document.querySelector('.follow ul li:nth-child(4) a').addEventListener('mouseover', function() {
        document.querySelector('.footer').style.backgroundColor = '#E62117';
    });
    document.querySelector('.follow ul li:nth-child(4) a').addEventListener('mouseout', function() {
        document.querySelector('.footer').style.backgroundColor = '#b0865f';
    });