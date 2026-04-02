import re

with open('3ddesignstudio (2).html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all scripts
scripts = re.findall(r'<script[^>]*>(.*?)</script>', content, flags=re.DOTALL | re.IGNORECASE)

js_content = ""
for s in scripts:
    if "ld+json" not in s and "email-decode" not in s:
        js_content += s + "\n"

# Remove all <style> blocks
clean_html = re.sub(r'<style.*?>.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)

# Remove all <script> blocks (except cloudflare and ld+json)
def script_repl(match):
    tag = match.group(0)
    if 'ld+json' in tag or 'cloudflare' in tag:
        return tag
    return ''

clean_html = re.sub(r'<script[^>]*>.*?</script>', script_repl, clean_html, flags=re.DOTALL | re.IGNORECASE)

# Inject our links into HEAD and BODY
clean_html = clean_html.replace('</head>', '<link rel="stylesheet" href="css/style.css">\n</head>')
clean_html = clean_html.replace('</body>', '<script src="components/header.js"></script>\n<script src="components/footer.js"></script>\n<script src="js/main.js" defer></script>\n</body>')

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(clean_html)

print("Split successful.")
