const fs = require('fs');
const path = require('path');

const template = (title, shortDesc) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${title} | 3D Design Studio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../../css/style.css">
  <script>var BASE_PATH = '../../';</script>
</head>
<body>
  <div id="loader" class="hide"><div style="text-align:center"><div class="lr"></div><div class="ll">3D <span>Design Studio</span></div><div class="ls">Crafting your experience...</div></div></div>
  <div id="prog"></div>
  <div id="cur"></div><div id="curR"></div>

  <script src="../../components/header.js"></script>

  <!-- Premium Hero Banner -->
  <section id="hero" style="min-height: 50vh;">
      <div class="hbp"></div><div class="hg1"></div><div class="hg2"></div>
      <div class="hmain" style="padding-top:120px;">
          <div class="hcontent">
              <div class="heyebrow">Service Details</div>
              <h1 class="htitle">${title}</h1>
              <p class="hdesc">${shortDesc}</p>
          </div>
      </div>
  </section>

  <!-- Service Overview & Featured Image -->
  <section>
    <div class="con">
       <span class="stag">Overview</span>
       <h2 class="stitle">Transform Your Space with <em>${title}</em></h2>
       <div style="height: 400px; border-radius: 20px; background: var(--teal-l) url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><rect fill=%22%23eee%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23aaa%22 x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Featured Image for ${title}</text></svg>') center/cover; margin: 40px 0;"></div>
       <p style="color:var(--gray); line-height:1.8; max-width:800px; font-size:16px;">We offer comprehensive end-to-end design and execution for your ${title.toLowerCase()}. Our focus is on delivering high-end materials, exceptional craftsmanship, and functional designs tailored to your specific needs.</p>
    </div>
  </section>

  <!-- Key Features / Deliverables -->
  <section style="background:var(--warm)">
    <div class="con">
      <span class="stag">Deliverables</span>
      <h2 class="stitle">What's <em>Included</em></h2>
      <div class="wstrip" style="flex-wrap: wrap; gap:20px; justify-content:center;">
          <div class="wi" style="flex: 1; min-width: 250px; background:#fff; border-radius:16px; border:1px solid var(--border);">
            <div class="wibox">1</div>
            <div class="wval">Custom Design</div>
            <div class="wlbl">3D visualization and planning tailored for your aesthetic.</div>
          </div>
          <div class="wi" style="flex: 1; min-width: 250px; background:#fff; border-radius:16px; border:1px solid var(--border);">
            <div class="wibox">2</div>
            <div class="wval">Premium Materials</div>
            <div class="wlbl">Industry-leading wood, finishes, and hardware.</div>
          </div>
          <div class="wi" style="flex: 1; min-width: 250px; background:#fff; border-radius:16px; border:1px solid var(--border);">
            <div class="wibox">3</div>
            <div class="wval">Professional Execution</div>
            <div class="wlbl">Expert installation with full attention to detail.</div>
          </div>
      </div>
    </div>
  </section>

  <!-- Design Options / Styles -->
  <section>
    <div class="con">
      <span class="stag">Aesthetics</span>
      <h2 class="stitle">Design <em>Options</em></h2>
      <div class="pgrid" style="margin-top:40px;">
        <div class="pc">
          <div class="pth pt1"></div>
          <div class="pover">
            <div class="pname">Modern Minimalist</div>
          </div>
        </div>
        <div class="pc">
          <div class="pth pt2"></div>
          <div class="pover">
            <div class="pname">Classic Elegance</div>
          </div>
        </div>
        <div class="pc">
          <div class="pth pt3"></div>
          <div class="pover">
            <div class="pname">Contemporary</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Timeline -->
  <section id="process">
    <div class="con">
      <div class="ph">
        <span class="stag">How it works</span>
        <h2 class="stitle">Our <em>Process</em></h2>
      </div>
      <div class="psteps">
        <div class="pcon"></div>
        <div class="ps"><div class="pnum">1</div><div class="pst">Consultation</div></div>
        <div class="ps"><div class="pnum">2</div><div class="pst">3D Design</div></div>
        <div class="ps"><div class="pnum">3</div><div class="pst">Approval</div></div>
        <div class="ps"><div class="pnum">4</div><div class="pst">Manufacturing</div></div>
        <div class="ps"><div class="pnum">5</div><div class="pst">Installation</div></div>
      </div>
    </div>
  </section>

  <!-- FAQ Section Placeholder -->
  <section id="faq" style="background:var(--warm)">
    <div class="con">
      <span class="stag" style="text-align:center">Queries</span>
      <h2 class="stitle" style="text-align:center">Frequently Asked <em>Questions</em></h2>
      <div class="finner" style="margin-top:32px;">
         <div class="fi">
           <div class="fq" onclick="this.parentElement.classList.toggle('open')">
             <div class="fqt">How long does a ${title.toLowerCase()} project take?</div>
             <div class="fico">+</div>
           </div>
           <div class="fa"><p>Our typical turnaround is 45 days from design approval to handover, depending on scale and complexity.</p></div>
         </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section id="ctab">
    <h2 class="ctitle">Ready for your dream ${title.toLowerCase()}?</h2>
    <p class="csub">Book a free consultation today.</p>
    <div class="cbtns">
      <a href="https://wa.me/919347428609" class="btnw">WhatsApp Us</a>
      <a href="../../pages/contact.html" class="btnow">Contact Form</a>
    </div>
  </section>

  <script src="../../components/footer.js"></script>
  <script src="../../js/main.js" defer></script>
</body>
</html>`;

const pages = [
  { file: 'modular-kitchen.html', title: 'Modular Kitchen', desc: 'Premium, ergonomic, and aesthetic culinary spaces designed for modern living.' },
  { file: 'modular-wardrobe.html', title: 'Modular Wardrobe', desc: 'Custom storage solutions combining flawless functionality with luxurious aesthetics.' },
  { file: 'full-home-interiors.html', title: 'Full Home Interiors', desc: 'End-to-end interior design and execution for a beautifully cohesive home.' },
  { file: 'renovation.html', title: 'Home Renovation', desc: 'Complete transformation of your existing space with modern designs and premium finishes.' }
];

pages.forEach(p => {
  fs.writeFileSync(path.join('pages', 'services', p.file), template(p.title, p.desc));
});

console.log('Service Detail pages generated.');
