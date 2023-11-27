const palarex_el = document.querySelectorAll(".palarex");

let xValue = 0, 
    yValue = 0;

let rotateDegree = 0



function update(cursorPosition) {
    palarex_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;
        
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `
        perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateSpeed}deg) 
        translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px))`;
    });
}

// เรียกใช้ฟังก์ชัน update ในตอนแรก
update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e.clientX);
});

// close--------------------------------------------------------

// login - SingUP --------------------------------------------------------

const login = document.querySelector(".btn-lg");
const loginPage = document.querySelector(".login");
const closed = document.querySelector(".icon-close");
const register = document.querySelector(".btn-su");
const registerPage = document.querySelector(".register");
const closedre = document.querySelector(".re-icon-close");
const registerlink = document.querySelector(".register-link");
const loginlink = document.querySelector(".login-link");


login.addEventListener("click", () => {
    loginPage.classList.add("active");
});

closed.addEventListener("click", () => {
    loginPage.classList.remove("active");
});

register.addEventListener("click", () => {
    registerPage.classList.add("active");
});
closedre.addEventListener("click", () => {
    registerPage.classList.remove("active");
});


// link--------------------------------------------------------

registerlink.addEventListener("click", () => {
    registerPage.classList.add("active");
    loginPage.classList.remove("active");
});

loginlink.addEventListener("click", () => {
    loginPage.classList.add("active");
    registerPage.classList.remove("active");
});

// pss----------------------------------------------------------
let trueuser = "non";
let truepass = "123456";
let user = document.querySelector("#user-window");
let pass = document.querySelector("#pass-window");

function btnLogin() {
    if (user.value === trueuser && pass.value === truepass) {
        alert("รหัสถูกต้อง");
        setTimeout(() => {
            window.location.href = "/main.html";
        },0);
    } else if (!user.value || !pass.value) {
        alert("กรุณากรอกทุกช่อง");
    } else {
        alert("รหัสไม่ถูกต้อง");
    }
}



    

