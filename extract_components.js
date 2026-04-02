const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf-8');

const navRegex = /<nav id="nav">.*?<\/nav>\s*<div class="mnav" id="mnav">.*?<\/div>\s*/s;
const navMatch = content.match(navRegex);

const footerRegex = /<footer>.*?<\/footer>\s*/s;
const footerMatch = content.match(footerRegex);

if (navMatch && footerMatch) {
    const navHTML = navMatch[0];
    const footerHTML = footerMatch[0];

    // Build header.js
    const headerJS = `document.write(\`\n${navHTML.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`);`;
    fs.writeFileSync('components/header.js', headerJS);

    // Build footer.js
    const footerJS = `document.write(\`\n${footerHTML.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`);`;
    fs.writeFileSync('components/footer.js', footerJS);

    // Replace in index.html
    content = content.replace(navRegex, '<script src="components/header.js"></script>\n');
    content = content.replace(footerRegex, '<script src="components/footer.js"></script>\n');

    // Remove the extra script tags added by the previous script at the bottom
    content = content.replace('<script src="components/header.js"></script>\n<script src="components/footer.js"></script>\n', '');

    fs.writeFileSync('index.html', content);
    console.log('Header and Footer extracted successfully.');
} else {
    console.log('Could not find nav or footer');
}
