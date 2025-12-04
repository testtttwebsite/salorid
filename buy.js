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

/* Navbar */
.navbar {
  position:fixed; top:0; left:0; width:100%;
  display:flex; justify-content:space-between; align-items:center;
  padding:18px 50px; background:rgba(15,15,15,0.9); z-index:10;
}
.logo {font-size:28px; font-weight:900; color:#fff; user-select:none;}
.nav-links {list-style:none; display:flex; gap:28px;}
.nav-links li a {font-weight:600; color:#fff; padding:6px 12px; border-radius:6px; transition:0.2s;}
.nav-links li a:hover, .nav-links li a.active {color:#00ffe7; background-color:rgba(0,255,231,0.15);}

/* Buy page main */
.buy-main {
  max-width:1200px; margin:120px auto 60px; padding:0 30px; color:#eee; text-align:center;
}
.buy-main h1 {font-size:48px; font-weight:900; margin-bottom:60px; color:#00ffe7;}
.plans-container {display:flex; justify-content:center; gap:80px; flex-wrap:wrap;}
.plan-card {
  background:rgba(15,15,15,0.95); border-radius:20px; width:400px; padding:50px 40px;
  box-shadow:0 4px 20px rgba(0,255,231,0.2); display:flex; flex-direction:column; align-items:center;
  transition:transform 0.3s ease, box-shadow 0.3s ease;
}
.plan-card:hover {transform:translateY(-8px); box-shadow:0 10px 30px rgba(0,255,231,0.4);}
.plan-card h2 {font-size:32px; margin-bottom:20px; color:#00ffe7;}
.price {font-size:44px; font-weight:900; margin-bottom:10px;}
.period {font-size:22px; font-weight:400; color:#8fdde7;}
.description {font-size:16px; color:#bbb; margin-bottom:40px; max-width:280px;}
.buy-btn, .learn-btn {
  width:100%; padding:15px; border-radius:14px; font-weight:800; font-size:18px; cursor:pointer; border:none; margin-bottom:20px; transition:background-color 0.3s ease,color 0.3s ease;
}
.buy-btn {background:linear-gradient(135deg,#00ffe7,#00a8ff); color:#000;}
.buy-btn:hover {background:linear-gradient(135deg,#00d3ba,#007acc);}
.learn-btn {background:transparent; border:2px solid #00ffe7; color:#00ffe7;}
.learn-btn:hover {background:#00ffe7; color:#000;}

/* Footer fixed at bottom */
footer {
  position:fixed; bottom:0; left:0; width:100%;
  text-align:center; padding:20px 0; background:rgba(15,15,15,0.9); font-size:0.9rem; color:#aaa;
}
`;
head.appendChild(style);

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
<div class="logo">SALORID</div>
<ul class="nav-links">
  <li><a href="#" id="home-link">Home</a></li>
  <li><a href="#" class="active">Buy Now</a></li>
  <li><a href="#" id="account-link">Account</a></li>
</ul>
`;
body.appendChild(navbar);

const buyMain = document.createElement("main");
buyMain.className = "buy-main";
buyMain.innerHTML = `
<h1>Choose Your Plan</h1>
<div class="plans-container">
  <div class="plan-card">
    <h2>Monthly Plan</h2>
    <p class="price">$9.99 <span class="period">/ month</span></p>
    <p class="description">Subscription, cancel anytime</p>
    <button class="buy-btn">Buy Monthly</button>
    <button class="learn-btn">Learn More</button>
  </div>
  <div class="plan-card">
    <h2>Lifetime Plan</h2>
    <p class="price">$39.99</p>
    <p class="description">One time payment, lifetime access</p>
    <button class="buy-btn">Buy Lifetime</button>
    <button class="learn-btn">Learn More</button>
  </div>
</div>
`;
body.appendChild(buyMain);

const footer = document.createElement("footer");
footer.innerHTML = "Discord: discord.gg/salorid &bull; Email: support@salorid.com";
body.appendChild(footer);

document.querySelectorAll('.buy-btn, .learn-btn').forEach(btn => {
  btn.addEventListener('click', e => e.preventDefault());
});

document.getElementById("home-link").addEventListener("click", () => {
  location.href = "index.html";
});
document.getElementById("account-link").addEventListener("click", () => {
  location.href = "account.html";
});
