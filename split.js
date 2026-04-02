const fs = require('fs');

let content = fs.readFileSync('3ddesignstudio (2).html', 'utf-8');

// Extract all scripts
const scriptRegex = /<script[^>]*>(.*?)<\/script>/gis;
let js_content = "";
let match;
while ((match = scriptRegex.exec(content)) !== null) {
    const fullTag = match[0].toLowerCase();
    if (!fullTag.includes('ld+json') && !fullTag.includes('cloudflare')) {
        js_content += match[1] + "\n";
    }
}

// Remove all <style> blocks
let clean_html = content.replace(/<style.*?>.*?<\/style>/gis, '');

// Remove all <script> blocks (except cloudflare and ld+json)
clean_html = clean_html.replace(/<script[^>]*>.*?<\/script>/gis, (match) => {
    const lowerMatch = match.toLowerCase();
    if (lowerMatch.includes('ld+json') || lowerMatch.includes('cloudflare')) {
        return match;
    }
    return '';
});

// Inject our links into HEAD and BODY
clean_html = clean_html.replace(/<\/head>/i, '<link rel="stylesheet" href="css/style.css">\n</head>');
clean_html = clean_html.replace(/<\/body>/i, '<script src="components/header.js"></script>\n<script src="components/footer.js"></script>\n<script src="js/main.js" defer></script>\n</body>');

fs.writeFileSync('js/main.js', js_content, 'utf-8');
fs.writeFileSync('index.html', clean_html, 'utf-8');

console.log('Split successful.');
