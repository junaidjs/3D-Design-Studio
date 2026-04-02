const fs = require('fs');

let headerText = fs.readFileSync('components/header.js', 'utf-8');
// remove the document.write(`...`) wrapping to get raw HTML back
headerText = headerText.substring("document.write(`\n".length, headerText.length - 3);

// Replace hrefs
headerText = headerText.replace(/href="#hero"/g, 'href="${base}index.html#hero"');
headerText = headerText.replace(/href="#offerings"/g, 'href="${base}pages/services.html"');
headerText = headerText.replace(/href="#ideas"/g, 'href="${base}pages/design-ideas.html"');
headerText = headerText.replace(/href="#portfolio"/g, 'href="${base}pages/portfolio.html"');
headerText = headerText.replace(/href="#mag"/g, 'href="${base}pages/journal.html"');
headerText = headerText.replace(/href="#faq"/g, 'href="${base}pages/faq.html"');
headerText = headerText.replace(/href="#contact"/g, 'href="${base}pages/contact.html"');

const newHeaderJS = `
(function() {
  const base = window.BASE_PATH || './';
  document.write(\`\n${headerText}\`);
})();
`;

fs.writeFileSync('components/header.js', newHeaderJS.trim());

let footerText = fs.readFileSync('components/footer.js', 'utf-8');
footerText = footerText.substring("document.write(`\n".length, footerText.length - 3);

// Replace hrefs inside footer if they point to hashes
footerText = footerText.replace(/href="#hero"/g, 'href="${base}index.html#hero"');
footerText = footerText.replace(/href="#offerings"/g, 'href="${base}pages/services.html"');
footerText = footerText.replace(/href="#ideas"/g, 'href="${base}pages/design-ideas.html"');
footerText = footerText.replace(/href="#portfolio"/g, 'href="${base}pages/portfolio.html"');
footerText = footerText.replace(/href="#mag"/g, 'href="${base}pages/journal.html"');
footerText = footerText.replace(/href="#faq"/g, 'href="${base}pages/faq.html"');
footerText = footerText.replace(/href="#contact"/g, 'href="${base}pages/contact.html"');
// Additional footer replacements (e.g., specific to about, etc.)
// E.g., href="#" or href=""
const newFooterJS = `
(function() {
  const base = window.BASE_PATH || './';
  document.write(\`\n${footerText}\`);
})();
`;
fs.writeFileSync('components/footer.js', newFooterJS.trim());

// Add <script>var BASE_PATH = './';</script> to index.html before header and footer
let indexHTML = fs.readFileSync('index.html', 'utf-8');
indexHTML = indexHTML.replace('<script src="components/header.js"></script>', '<script>var BASE_PATH = \'./\';</script>\n<script src="components/header.js"></script>');
fs.writeFileSync('index.html', indexHTML);

console.log('Components updated with base path.');
