const fs = require('fs');
const path = require('path');

const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Our Services | 3D Design Studio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../css/style.css">
  <script>var BASE_PATH = '../';</script>
</head>
<body>
  <div id="loader" class="hide"><div style="text-align:center"><div class="lr"></div><div class="ll">3D <span>Design Studio</span></div><div class="ls">Crafting your experience...</div></div></div>
  <div id="prog"></div>
  <div id="cur"></div><div id="curR"></div>

  <script src="../components/header.js"></script>

  <section id="hero" style="min-height: 40vh;">
      <div class="hbp"></div><div class="hg1"></div><div class="hg2"></div>
      <div class="hmain" style="padding-top:120px;">
          <div class="hcontent">
              <h1 class="htitle">Our <em>Services</em></h1>
              <p class="hdesc">End-to-end premium interior solutions for every space in your home.</p>
          </div>
      </div>
  </section>

  <!-- OFFERINGS / SERVICES REPLICATED FROM MASTER DESIGN -->
  <section id="offerings" style="background:var(--warm)">
    <div class="con">
      <span class="stag">Expertise</span>
      <h2 class="stitle">What We <em>Offer</em></h2>
      <p class="ssub">Premium solutions from single rooms to complete home transformations.</p>
      
      <div class="og" style="margin-top: 40px;">
        <div class="oc" onclick="window.location.href='services/modular-kitchen.html'">
          <div class="othumb">
            <div class="obadge ot1">Top Rated</div>
            <img src="data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><rect fill=%22%23ddd%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2218%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Modular Kitchen</text></svg>" alt="Kitchen"/>
          </div>
          <div class="obody">
            <div class="ocat">Core Service</div>
            <div class="otitle">Modular Kitchens</div>
            <div class="odesc">Ergonomic, modern, and highly functional culinary spaces tailored to your cooking style.</div>
            <div class="oarrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </div>
        </div>

        <div class="oc" onclick="window.location.href='services/modular-wardrobe.html'">
          <div class="othumb">
            <div class="obadge ot2">Custom Fit</div>
            <img src="data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><rect fill=%22%23ccc%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23888%22 x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2218%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Modular Wardrobe</text></svg>" alt="Wardrobes"/>
          </div>
          <div class="obody">
            <div class="ocat">Core Service</div>
            <div class="otitle">Modular Wardrobes</div>
            <div class="odesc">Smart storage solutions that blend seamlessly with your bedroom's aesthetic.</div>
            <div class="oarrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </div>
        </div>

        <div class="oc" onclick="window.location.href='services/full-home-interiors.html'">
          <div class="othumb">
            <div class="obadge ot3">Most Popular</div>
            <img src="data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><rect fill=%22%23eee%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23aaa%22 x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2218%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Full Home</text></svg>" alt="Full Home"/>
          </div>
          <div class="obody">
            <div class="ocat">Premium Package</div>
            <div class="otitle">Full Home Interiors</div>
            <div class="odesc">Complete end-to-end design and execution for a beautifully cohesive living space.</div>
            <div class="oarrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </div>
        </div>

        <div class="oc" onclick="window.location.href='services/renovation.html'">
          <div class="othumb">
            <div class="obadge ot4">Transformation</div>
            <img src="data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><rect fill=%22%23ddd%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2218%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Renovation</text></svg>" alt="Renovation"/>
          </div>
          <div class="obody">
            <div class="ocat">Specialized</div>
            <div class="otitle">Renovations</div>
            <div class="odesc">Breathe new life into your old spaces with modern design and premium materials.</div>
            <div class="oarrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section id="ctab">
    <h2 class="ctitle">Looking for a comprehensive quote?</h2>
    <p class="csub">Connect with our design experts today.</p>
    <div class="cbtns">
      <a href="https://wa.me/919347428609" class="btnw">WhatsApp Us</a>
      <a href="../pages/contact.html" class="btnow">Contact Form</a>
    </div>
  </section>

  <script src="../components/footer.js"></script>
  <script src="../js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(path.join('pages', 'services.html'), content);
console.log('Main services page generated.');
