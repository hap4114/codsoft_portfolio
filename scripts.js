document.addEventListener("DOMContentLoaded", function() {
    const counter2 = document.querySelector(".counter_2_digit");
    const counter3 = document.querySelector(".counter_3_digit");

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            const div2 = document.createElement("div");
            div2.className = "num";
            div2.textContent = j;
            counter2.appendChild(div2);
            
            const div3 = document.createElement("div");
            div3.className = "num";
            div3.textContent = j;
            counter3.appendChild(div3);
        }
    }

    const finalDiv2 = document.createElement("div");
    finalDiv2.className = "num";
    finalDiv2.textContent = "0";
    counter2.appendChild(finalDiv2);

    const finalDiv3 = document.createElement("div");
    finalDiv3.className = "num";
    finalDiv3.textContent = "0";
    counter3.appendChild(finalDiv3);

    function animate(counter, duration, delay = 1) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
            opacity:0,
            stagger:0.25
        });
    }

    animate(counter3, 4);
    animate(counter2, 4);
    animate(document.querySelector(".counter_1_digit"),1, 2);

    gsap.to(".di", {
        top: "-150px",
        stagger: {
            amount: 0.25
        },
        delay: 2,
        duration: 1,
        ease: "power4.inOut"
    });

    gsap.to(".loader img", {
        opacity: 0,
        duration: 2.5,
        delay: 1,
        y: 100,
        x: 1000,
        scale:3
    });

    gsap.to(".loading_screen", {
        opacity: 0,
        duration: 0.5,
        delay: 4,
        ease: "power1.easeOut",
        onComplete: () => {
            document.querySelector(".loading_screen").style.display = 'none';
        },
        stagger:1
    });
});

var tl = gsap.timeline();

tl.from("#nav img", {
        y: 550,
        x: 800,
        opacity: 0,
        scale: 8,
        duration: 3,
        delay: 1
    });

tl.from("#nav h4", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3
    });
tl.from(".home h1",{
        x:100,
        opacity:0,
        duration:1,
        delay:-3
    });
tl.from("#page1 .home2 img",{
    y:-100,
    opacity:0,
    duration:1.1,
    delay:0.5
})
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Designer."
    }, 0);
    setTimeout(() => {
        text.textContent = "Front end Developer."
    },4000);
    setTimeout(() => {
        text.textContent = "AI/ML Enthusiasts."
    },8000);
    setTimeout(() => {
        text.textContent = "Cyber Enthusiasts."
    },12000);

}
textLoad();
setInterval(textLoad, 16000);


tl.to("#page2 h1",{
    transform:"translate(-100%)",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
        delay:1
    },
    opacity:0.5,
    delay:1
})

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>
    {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

tl.from("#page5 .heading h1",{
    y:-500,
    opacity:0,
    stagger:0.1,
    duration:1.5,
    dealay:1
});
tl.from("#page5 .heading p",{
    x:500,
    opacity:0,
    stagger:0.1,
    duration:1.5,
    dealay:1,
    rotate:"720"
});

tl.from("#page5 .container ",{
    y:-500,
    opacity:0,
    stagger:0.1,
    duration:1.5,
    dealay:1
});

tl.from("#page3 .card_container",{
    y:-100,
    opacity:0,
    scale:0.5,
    duration:2,
    delay:1,
    stagger:0.5
});

tl.from("#page6 .card_container",{
    y:-100,
    opacity:0,
    scale:0.5,
    duration:1.5,
    delay:0.4,
    stagger:0.5
})

tl.from("#page4 h1",{
    y:-100,
    opacity:0.5,
    scale:0.5,
    duration:2,
    delay:1
})


