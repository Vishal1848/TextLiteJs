window.addEventListener("mousemove", function (dets) {
    document.querySelector("#smcircle").style.top = `${dets.clientY}px`;
    document.querySelector("#smcircle").style.left = `${dets.clientX}px`;
});

// })
window.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.top = `${dets.clientY}px`;
    document.querySelector("#cursor").style.left = `${dets.clientX}px`;
});

document.querySelectorAll(".enlarge").forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        document.querySelector("#smcircle").style.width = "60px";
        document.querySelector("#smcircle").style.height = "60px";
        document.querySelector("#smcircle").style.backgroundColor = "white";
        document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
    elem.addEventListener("mouseleave", function () {
        document.querySelector("#smcircle").style.width = "15px";
        document.querySelector("#smcircle").style.height = "15px";
        document.querySelector("#smcircle").style.backgroundColor = "transparent";
        document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
})
$('.enlarge').textillate({ in: { effect: 'fadeInUp', delay: 20 } });

document.querySelectorAll(".abcd").forEach(function (ele) {
    ele.addEventListener("mousemove", function (dets) {
        document.querySelector("#main").style.backgroundColor = dets.target.dataset.color;
        document.querySelector("#smcircle").style.display = "none";
        document.querySelector("#cursor").style.display = "initial";    
        document.querySelector("#cursor").style.mixBlendMode = "difference";
    })
    ele.addEventListener("mouseleave", function () {
        document.querySelector("#main").style.backgroundColor = "initial";
        document.querySelector("#smcircle").style.display = "initial";
        document.querySelector("#cursor").style.display = "none";
        document.querySelector("#cursor").style.mixBlendMode = "initial";
    })
})
document.querySelector("#circle").addEventListener("mousemove", function (dets) {
    document.querySelector("#circle").style.transform = `translate(${dets.clientX * .2}px,${dets.clientY * .1}px)`;
})
document.querySelector("#circle").addEventListener("mouseleave", function (dets) {
    document.querySelector("#circle").style.transform = `translate(0px,0px)`;
})
