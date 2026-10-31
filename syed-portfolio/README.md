# Syed Musharaf — Portfolio Website

Full code for syedmusharaf.github.io. No build step, no coding needed.

## Files
- `index.html` — all content (Hero, About, Experience, Projects, Contact)
- `style.css` — burnt-orange + charcoal + cream design
- `script.js` — scroll animations + hero video handling
- `assets/portrait.jpg` — your professional photo (About + hero poster)
- `assets/hero-poster.jpg` — hero background photo until the video is added

## Put it live on GitHub Pages (5 minutes)
1. Go to your GitHub repo `syedmusharaf0/syedmusharaf.github.io`
2. Upload all files in this folder (keep `assets/` as a folder, keep the same names)
3. Repo Settings → Pages → Source: `main` branch, `/ (root)` → Save
4. Open https://syedmusharaf.github.io — done

## Add your Higgsfield hero video later (1 step)
1. Generate the hero video in Higgsfield using the prompt Muse gave you + your portrait photo
2. Download it and rename the file to `hero-video.mp4`
3. Put it in the `assets/` folder
4. In `index.html`, find the hero `<video>` tag and remove the `<!--` and `-->` around this line:
   `<source src="assets/hero-video.mp4" type="video/mp4">`
5. Re-upload `index.html` + the video to GitHub. The video now plays behind your name automatically.

## Swap project screenshots later
Each project card has a designed graphic in a `<div class="card-art ...">`.
To use a real screenshot, replace that whole div with:
`<img src="assets/your-screenshot.png" alt="..." style="width:100%;display:block">`
