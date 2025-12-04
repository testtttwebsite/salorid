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
.navbar .logo {font-size:28px; font-weight:900; color:#fff;}
.nav-links {list-style:none; display:flex; gap:28px;}
.nav-links li a {font-weight:600; color:#fff; padding:6px 12px; border-radius:6px; transition:0.2s;}
.nav-links li a:hover, .nav-links li a.active {color:#00ffe7; background-color:rgba(0,255,231,0.15);}
.dashboard-wrapper {display:flex; margin-top:90px; min-height:calc(100vh - 90px); position:relative; top:0;}
.sidebar {width:200px; background: rgba(20,20,20,0.65); border-right:1px solid #1a1a1a; backdrop-filter:blur(16px); display:flex; flex-direction:column; padding:20px; height:100vh; position:fixed; top:90px; left:0;}
.sidebar a {color:#fff; padding:12px 16px; margin-bottom:10px; border-radius:6px; transition:0.2s; display:block;}
.sidebar a:hover, .sidebar a.active {background:#00ffe7; color:#000;}
.main {margin-left:220px; padding:30px; display:flex; flex-direction:column; gap:20px; min-height:calc(100vh - 90px); overflow-y:auto;}
.section {background: rgba(20,20,20,0.65); border:1px solid #1a1a1a; border-radius:14px; padding:25px;}
.section h3 {color:#00ffe7; margin-bottom:15px;}
.input {width:100%; padding:12px 14px; margin-bottom:12px; border-radius:8px; border:none; outline:none; font-size:15px; background:#0e0e0e; color:#fff; border:1px solid #1f1f1f;}
.input:focus {border-color:#00ffe7;}
.btn {padding:12px 20px; border:none; border-radius:8px; background:linear-gradient(45deg,#00ffe7,#00a8ff); font-weight:700; cursor:pointer; color:#000; margin-top:8px; transition:0.2s;}
.btn:hover {transform:scale(1.03);}
.profile-top {display:flex; align-items:center; justify-content:flex-start; margin-bottom:20px;}
.profile-top img {width:70px; height:70px; border-radius:50%; margin-right:20px; border:2px solid #00ffe7;}
.profile-name {font-size:24px; font-weight:700;}
footer {text-align:center; padding:20px 0; background:rgba(15,15,15,0.9); font-size:0.9rem; color:#aaa; margin-top:auto;}
.fake-changelog {margin-top:10px; font-size:14px; color:#ccc; background:#0e0e0e; padding:10px; border-radius:8px;}
`;
head.appendChild(style);

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
<div class="logo">SALORID</div>
<ul class="nav-links">
  <li><a href="index.html" id="homeLink" class="active">Home</a></li>
  <li><a href="buy.html" id="buyLink">Buy Now</a></li>
  <li><a href="account.html" id="accountLink">Account</a></li>
</ul>
`;
body.appendChild(navbar);

const dashboardWrapper = document.createElement("div");
dashboardWrapper.className = "dashboard-wrapper";
body.appendChild(dashboardWrapper);

const sidebar = document.createElement("div");
sidebar.className = "sidebar";
sidebar.innerHTML = `
<a href="#" class="active" data-section="profileSection">Profile</a>
<a href="#" data-section="settingsSection">Settings</a>
<a href="#" data-section="downloadSection">Download</a>
<a href="#" data-section="billingSection">Billing</a>
<a href="#" data-section="logoutSection">Logout</a>
`;
dashboardWrapper.appendChild(sidebar);

const main = document.createElement("div");
main.className = "main";
main.innerHTML = `
<div id="profileSection" class="section">
  <div class="profile-top">
    <img id="profilePic" src="preview1.png"/>
    <div>
      <div class="profile-name" id="profileName">Chickenmix</div>
      <div>Account Created: <span id="accountCreated">2025-01-01</span></div>
      <div>License Expires: <span id="licenseExpires">2025-12-31</span></div>
    </div>
  </div>
</div>

<div id="settingsSection" class="section" style="display:none;">
  <h3>Settings</h3>
  <input id="newName" class="input" type="text" placeholder="Change Name"/>
  <input id="uploadPfp" type="file" class="input" accept="image/*"/>
  <button class="btn" id="saveSettings">Save Changes</button>
</div>

<div id="downloadSection" class="section" style="display:none;">
  <h3>Download</h3>
  <button class="btn" id="downloadBtn">Download Latest Version</button>
  <div class="fake-changelog">
    <strong>Changelog v1.0.1:</strong>
    <ul>
      <li>Improved dashboard layout</li>
      <li>Bug fixes for login flow</li>
      <li>New download button added</li>
    </ul>
  </div>
</div>

<div id="billingSection" class="section" style="display:none;">
  <h3>Billing</h3>
  <div>Card: **** **** **** 1234</div>
  <div>Status: Active</div>
  <button class="btn" id="removeCard">Remove Card</button>
  <button class="btn" id="cancelLicense">Cancel License</button>
  <button class="btn" id="renewLicense">Renew License</button>
</div>
`;
dashboardWrapper.appendChild(main);

const links = sidebar.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    const sectionId = link.dataset.section;
    document.querySelectorAll(".section").forEach(sec => sec.style.display="none");
    if(sectionId!=="logoutSection") document.getElementById(sectionId).style.display="block";
    if(sectionId==="logoutSection") location.reload();
  });
});

document.getElementById("saveSettings").addEventListener("click", () => {
  const newName = document.getElementById("newName").value.trim();
  if(newName) document.getElementById("profileName").innerText = newName;

  const fileInput = document.getElementById("uploadPfp");
  if(fileInput.files.length > 0){
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById("profilePic").src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const a = document.createElement("a");
  a.download = "";
  document.body.appendChild(a);
  a.click();
  a.remove();
});

