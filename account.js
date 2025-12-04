document.documentElement.innerHTML = "";
const head = document.createElement("head");
const body = document.createElement("body");
document.documentElement.appendChild(head);
document.documentElement.appendChild(body);

const style = document.createElement("style");
style.innerText = `
* {margin:0; padding:0; box-sizing:border-box;}
body {font-family:'Segoe UI', sans-serif; background:#0d0d0d; color:#eee; overflow-x:hidden;}
a {text-decoration:none; color:inherit;}
.navbar {position:fixed; top:0; left:0; width:100%; display:flex; justify-content:space-between; align-items:center; padding:18px 50px; background:rgba(15,15,15,0.9); z-index:10;}
.logo {font-size:28px; font-weight:900; color:#fff; user-select:none;}
.nav-links {list-style:none; display:flex; gap:28px;}
.nav-links li a {font-weight:600; color:#fff; padding:6px 12px; border-radius:6px; transition:0.2s;}
.nav-links li a:hover, .nav-links li a.active {color:#00ffe7; background-color:rgba(0,255,231,0.15);}
.auth-main {width:100%; display:flex; justify-content:center; margin-top:190px;}
.auth-container {width:380px; padding:35px 40px; background: rgba(20,20,20,0.65); border:1px solid #1a1a1a; border-radius:14px; backdrop-filter:blur(16px); display:flex; flex-direction:column; align-items:center; animation:fadeIn 0.9s ease-out;}
.auth-container h1 {font-size:32px; font-weight:800; margin-bottom:25px; color:#00ffe7;}
.input {width:100%; padding:12px 14px; margin-bottom:15px; border-radius:8px; border:none; outline:none; font-size:15px; background:#0e0e0e; color:#fff; border:1px solid #1f1f1f; transition:0.2s;}
.input:focus {border-color:#00ffe7;}
.auth-btn {width:100%; padding:14px; border:none; border-radius:8px; background:linear-gradient(45deg,#00ffe7,#00a8ff); font-size:17px; font-weight:700; cursor:pointer; color:#000; margin-top:8px; transition:0.22s;}
.auth-btn:hover {transform:scale(1.03);}
.toggle-text {margin-top:18px; text-align:center; font-size:14px; color:#cfcfcf; cursor:pointer;}
.toggle-text a {color:#00ffe7; text-decoration:none; font-weight:600;}
footer {text-align:center; padding:20px 0; background:rgba(15,15,15,0.9); font-size:0.9rem; color:#aaa; margin-top:40px;}
@keyframes fadeIn {0%{opacity:0; transform:translateY(15px);} 100%{opacity:1; transform:translateY(0);}}
`;
head.appendChild(style);

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
<div class="logo">SALORID</div>
<ul class="nav-links">
  <li><a href="index.html" id="home-link">Home</a></li>
  <li><a href="buy.html">Buy Now</a></li>
  <li><a href="#" class="active">Account</a></li>
</ul>
`;
body.appendChild(navbar);

const main = document.createElement("main");
main.className = "auth-main";
main.innerHTML = `
<div class="auth-container">
  <h1>Login</h1>
  <input id="username" class="input" type="text" placeholder="Username" autocomplete="off" />
  <input id="password" class="input" type="password" placeholder="Password" autocomplete="off" />
  <button id="authBtn" class="auth-btn">Login</button>
  <div class="toggle-text">Don't have an account? <a href="#">Register</a></div>
  <p id="authMessage" style="color:#00ffe7; margin-top: 10px; font-weight: 600; display:none;"></p>
</div>
`;
body.appendChild(main);

let isLogin = true;
const toggle = main.querySelector(".toggle-text");
const container = main.querySelector(".auth-container");

toggle.addEventListener("click", () => {
  isLogin = !isLogin;
  container.innerHTML = isLogin 
  ? `
    <h1>Login</h1>
    <input id="username" class="input" type="text" placeholder="Username" autocomplete="off" />
    <input id="password" class="input" type="password" placeholder="Password" autocomplete="off" />
    <button id="authBtn" class="auth-btn">Login</button>
    <div class="toggle-text">Don't have an account? <a href="#">Register</a></div>
    <p id="authMessage" style="color:#00ffe7; margin-top: 10px; font-weight: 600; display:none;"></p>
  ` 
  : `
    <h1>Register</h1>
    <input id="username" class="input" type="text" placeholder="Username" autocomplete="off" />
    <input id="email" class="input" type="email" placeholder="Email" autocomplete="off" />
    <input id="password" class="input" type="password" placeholder="Password" autocomplete="off" />
    <input id="confirmPassword" class="input" type="password" placeholder="Confirm Password" autocomplete="off" />
    <button id="authBtn" class="auth-btn">Register</button>
    <div class="toggle-text">Already have an account? <a href="#">Login</a></div>
    <p id="authMessage" style="color:#00ffe7; margin-top: 10px; font-weight: 600; display:none;"></p>
  `;
  const newAuthBtn = container.querySelector("#authBtn");
  newAuthBtn.addEventListener("click", () => location.href = "dashboard.html");
  container.querySelector(".toggle-text").addEventListener("click", toggle.click);
});

main.querySelector("#authBtn").addEventListener("click", () => location.href = "dashboard.html");
document.getElementById("home-link").addEventListener("click", () => location.href = "index.html");
