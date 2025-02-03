// htmlcss progress circular bar
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 50;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 85,
  jsspeed = 50;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 50;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 50;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

//typewritting circular bar
let typewrittingProgress = document.querySelector(".typewritting"),
  typewrittingValue = document.querySelector(".typewritting-progress");

let typeStartValue = 0,
  typeEndValue = 70,
  typeSpeed = 50;

let progressType = setInterval(() => {
  typeStartValue++;

  typewrittingValue.textContent = `${typeStartValue}%`;
  typewrittingProgress.style.background = `conic-gradient(#3f396d ${
    typeStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (typeStartValue == typeEndValue) {
    clearInterval(progressType);
  }
}, typeSpeed);

//hindi circular bar
let hindiProgress = document.querySelector(".hindi"),
  hindiValue = document.querySelector(".hindi-progress");

let hindiStartValue = 0,
  hindiEndValue = 35,
  hindiSpeed = 50;

let progressHindi = setInterval(() => {
  hindiStartValue++;

  hindiValue.textContent = `${hindiStartValue}%`;
  hindiProgress.style.background = `conic-gradient(#3f396d ${
    hindiStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (hindiStartValue == hindiEndValue) {
    clearInterval(progressHindi);
  }
}, hindiSpeed);

// filter using javascript

// javascript for sticky navbar even if u scroll the navbar will be fixed

// adding funtionality to back to top button

//Get the button

// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document

let hari = document.querySelector("#hari");

hari.addEventListener("click", () => {
  open("https://www.instagram.com/xx.sri.xx__57?igsh=eGUzbzR1Y2FoMnZw");
});

let hari2 = document.querySelector("#hari2");

hari2.addEventListener("click", () => {
  open(
    "https://www.linkedin.com/in/sriragul0304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  );
});

let image1 = document.querySelector(".image1") , image2 = document.querySelector(".image2");

image1.addEventListener("click",()=>{
  open("https://sriragul0403.github.io/turbomath-calc/")
})

image2.addEventListener("click",()=>{
  open("https://sriragul0403.github.io/physicalci/")
})
