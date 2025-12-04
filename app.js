document.documentElement.innerHTML = ""
const head = document.createElement("head")
const body = document.createElement("body")
document.documentElement.appendChild(head)
document.documentElement.appendChild(body)

const style = document.createElement("style")
style.innerText = `
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#0d0d0d;color:#eee;overflow-x:hidden;}
a{text-decoration:none;color:inherit;}
.navbar{position:fixed;top:0;left:0;width:100%;display:flex;justify-content:space-between;align-items:center;padding:18px 50px;background:rgba(15,15,15,0.9);z-index:10;}
.logo{font-size:28px;font-weight:900;color:#fff;user-select:none;}
.nav-links{list-style:none;display:flex;gap:28px;}
.nav-links li a{font-weight:600;color:#fff;padding:6px 12px;border-radius:6px;transition:0.2s;}
.nav-links li a:hover,.nav-links li a.active{color:#00ffe7;background-color:rgba(0,255,231,0.15);}

.hero-section{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:relative;}
.hero-text{position:relative;z-index:2;max-width:700px;opacity:0;animation:fadeIn 1s forwards;transform:translateY(0);}
.hero-text h1{font-size:48px;color:#00ffe7;margin-bottom:20px;}
.hero-text p{font-size:20px;color:#ccc;margin-bottom:30px;}
.hero-btn{background:linear-gradient(45deg,#00ffe7,#00a8ff);padding:14px 30px;border-radius:12px;color:#000;font-weight:700;transition:transform 0.25s ease;}
.hero-btn:hover{transform:scale(1.05);box-shadow:0 0 20px #00ffe7;}
#hero-bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}

.info-section{position:relative;width:100%;background:#0d0d0d;padding:80px 20px;}
.info-section .info-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:40px;max-width:1000px;margin:0 auto 60px;}
.info-row .info-img{flex:1 1 300px;max-width:400px;}
.info-row .info-img img{width:100%;border-radius:12px;}
.info-row .info-text{flex:1 1 300px;max-width:500px;color:#eee;}
.info-row .info-text h2{color:#00ffe7;margin-bottom:15px;}
.info-row .info-text p{color:#ccc;line-height:1.5;margin-bottom:20px;}
.info-row .info-text a.btn2{display:inline-block;background:linear-gradient(45deg,#00ffe7,#00a8ff);padding:12px 24px;border-radius:10px;color:#000;font-weight:700;transition:transform 0.25s ease;text-decoration:none;}
.info-row .info-text a.btn2:hover{transform:scale(1.05);box-shadow:0 0 20px #00ffe7;}

.banners{display:flex;flex-wrap:wrap;gap:20px;padding:50px 20px;justify-content:center;background:#0d0d0d;position:relative;}
.banner{flex:1 1 200px;max-width:220px;cursor:pointer;transition:transform 0.3s;}
.banner img{width:100%;display:block;}
.banner:hover{transform:scale(1.05);box-shadow:0 0 15px rgba(0,255,231,0.6);}

footer{text-align:center;padding:20px 0;background:rgba(15,15,15,0.9);font-size:0.9rem;color:#aaa;}
@keyframes fadeIn{0%{opacity:0;transform:translateY(15px);}100%{opacity:1;transform:translateY(0);}}
`
head.appendChild(style)

const navbar = document.createElement("nav")
navbar.className = "navbar"
navbar.innerHTML = `
<div class="logo">SALORID</div>
<ul class="nav-links">
  <li><a href="#" class="active">Home</a></li>
  <li><a href="buy.html">Buy Now</a></li>
  <li><a href="account.html">Account</a></li>
</ul>
`
body.appendChild(navbar)

const hero = document.createElement("section")
hero.className = "hero-section"
hero.innerHTML = `
<canvas id="hero-bg"></canvas>
<div class="hero-text">
  <h1>Experience Minecraft Like Never Before</h1>
  <p>Salorid Client gives you long hands.</p>
  <a href="buy.html" class="hero-btn">Get Started</a>
</div>
`
body.appendChild(hero)

const infoSection = document.createElement("section")
infoSection.className = "info-section"
const rows = [
  { img: "preview1.png", title: "Placeholder", desc: "This is placeholder text. Replace it with your actual content here."},
  { img: "preview2.png", title: "Placeholder", desc: "This is placeholder text. Replace it with your actual content here."},
  { img: "preview3.png", title: "Placeholder", desc: "This is placeholder text. Replace it with your actual content here."}
]
rows.forEach((r, idx) => {
  const row = document.createElement("div")
  row.className = "info-row"
  let html = ""
  if(idx % 2 === 0) {
    html = `
      <div class="info-img"><img src="${r.img}" alt="${r.title}"></div>
      <div class="info-text">
        <h2>${r.title}</h2>
        <p>${r.desc}</p>
        <a href="docs.html" class="btn2">Learn More</a>
      </div>`
  } else {
    html = `
      <div class="info-text">
        <h2>${r.title}</h2>
        <p>${r.desc}</p>
        <a href="docs.html" class="btn2">Learn More</a>
      </div>
      <div class="info-img"><img src="${r.img}" alt="${r.title}"></div>`
  }
  row.innerHTML = html
  infoSection.appendChild(row)
})
body.appendChild(infoSection)

const banners = document.createElement("section")
banners.className = "banners"
banners.innerHTML = `
<div class="banner">
  <a href="https://discord.gg/salorid" target="_blank">
    <img src="discord.png" alt="Discord">
  </a>
</div>
<div class="banner">
  <a href="">
    <img src="support.png" alt="Support">
  </a>
</div>
<div class="banner">
  <a href="docs.html">
    <img src="docs.png" alt="Documentation">
  </a>
</div>
`

body.appendChild(banners)

const canvas = document.getElementById("hero-bg")
const ctx = canvas.getContext("2d")

function resizeCanvas(){
  canvas.width = hero.clientWidth
  canvas.height = hero.clientHeight
}
resizeCanvas()
window.addEventListener("resize", resizeCanvas)

let particles = []
class Particle {
  constructor(c){
    this.canvas = c
    this.x = Math.random()*c.width
    this.y = Math.random()*c.height
    this.s = Math.random()*2 + 1
    this.vx = (Math.random()-0.5)*0.3
    this.vy = (Math.random()-0.5)*0.3
    this.c = `rgba(0,255,231,${Math.random()*0.5 + 0.2})`
  }
  update(){
    this.x += this.vx
    this.y += this.vy
    if(this.x<0||this.x>this.canvas.width) this.vx*=-1
    if(this.y<0||this.y>this.canvas.height) this.vy*=-1
  }
  draw(ctx){
    ctx.fillStyle = this.c
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.s,0,Math.PI*2)
    ctx.fill()
  }
}

for(let i=0;i<80;i++){
  particles.push(new Particle(canvas))
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  particles.forEach(p=>{p.update(); p.draw(ctx)})
  requestAnimationFrame(animate)
}
animate()
