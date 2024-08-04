const btn = document.querySelector("#box");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

btn.addEventListener(
  "mousemove",
  throttleFunction((detail) => {
    let div = document.createElement("div");
    div.classList.add("imgdiv");
    div.style.left = detail.clientX + "px";
    div.style.top = detail.clientY + "px";
    document.body.appendChild(div);
    let img = document.createElement("img");
    img.setAttribute("src", "sardar-kamran-khan-RsCvxI9h2Ew-unsplash.jpg");
    div.appendChild(img);

    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });
    gsap.to(img, {
      y: "100%",
      ease: Power2,
      delay: 0.6,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
