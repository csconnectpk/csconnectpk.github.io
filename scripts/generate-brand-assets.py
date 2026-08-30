from PIL import Image, ImageDraw, ImageFont
import os
import shutil

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
images_dir = os.path.join(root, "images")
os.makedirs(images_dir, exist_ok=True)

src = os.path.join(root, "new-logo.jpg")
logo_path = os.path.join(images_dir, "logo.jpg")
shutil.copy2(src, logo_path)

logo = Image.open(logo_path).convert("RGBA")

for size, name in [(32, "favicon.png"), (180, "apple-touch-icon.png")]:
    img = logo.resize((size, size), Image.Resampling.LANCZOS)
    img.save(os.path.join(root, name), "PNG")

og_w, og_h = 1200, 630
og = Image.new("RGB", (og_w, og_h), "#0a0a0a")
mark_size = 220
mark = logo.resize((mark_size, mark_size), Image.Resampling.LANCZOS)
x = (og_w - mark_size) // 2
y = (og_h - mark_size) // 2 - 40
og.paste(mark, (x, y), mark)

try:
    font = ImageFont.truetype("arial.ttf", 56)
    font_sm = ImageFont.truetype("arial.ttf", 28)
except OSError:
    font = ImageFont.load_default()
    font_sm = ImageFont.load_default()

draw = ImageDraw.Draw(og)
title = "CS Connect Pakistan"
bbox = draw.textbbox((0, 0), title, font=font)
tx = (og_w - (bbox[2] - bbox[0])) // 2
ty = y + mark_size + 36
draw.text((tx, ty), title, fill="#F5F5F5", font=font)
subtitle = "Pakistan's Premier Tech Community"
bbox2 = draw.textbbox((0, 0), subtitle, font=font_sm)
sx = (og_w - (bbox2[2] - bbox2[0])) // 2
draw.text((sx, ty + 70), subtitle, fill="#00C853", font=font_sm)
og.save(os.path.join(images_dir, "og-image.png"), "PNG")

print("Generated favicon.png, apple-touch-icon.png, images/logo.jpg, images/og-image.png")
