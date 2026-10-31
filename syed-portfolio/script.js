// Reveal sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Hero: if a Higgsfield video source is present, play it.
// If not, the <video> poster (your portrait photo) stays as the hero image.
const video = document.querySelector('.hero-video');
if (video && video.querySelector('source')) {
  video.play().catch(() => {});
}

// ---- Talking intro (inspired by the reference portfolio video) ----
// The words type out while the browser voice speaks them.
// When a real Higgsfield talking video of Syed is added as
// assets/hero-video.mp4, it replaces this photo + voice version.
const INTRO_TEXT = "Hi, I am Syed Musharaf. I'm an AI Engineer based in Riyadh, Saudi Arabia. " +
  "I build Agentic RAG systems for banking and SAMA compliance, and I turn data into dashboards " +
  "and decisions with Power BI and machine learning. I have 4.3 years of experience, and I'm open to " +
  "AI Engineer, Data Scientist, Data Analyst and Business Analyst roles across Saudi Arabia, " +
  "and relocation to Dubai. Let's build something useful.";

const talkBtn = document.getElementById('talkBtn');
const talkText = document.getElementById('talkText');
let speaking = false;
let typeTimer = null;

function stopTalking() {
  speaking = false;
  if (window.speechSynthesis) speechSynthesis.cancel();
  if (typeTimer) clearInterval(typeTimer);
  document.body.classList.remove('talking');
  if (talkBtn) talkBtn.innerHTML = '&#9654; Hear my intro';
}

if (talkBtn && talkText) {
  talkBtn.addEventListener('click', () => {
    if (speaking) { stopTalking(); return; }
    speaking = true;
    document.body.classList.add('talking');
    talkBtn.innerHTML = '&#9632; Stop';

    // Typewriter for the spoken words
    let i = 0;
    talkText.textContent = '';
    typeTimer = setInterval(() => {
      talkText.textContent = INTRO_TEXT.slice(0, ++i);
      if (i >= INTRO_TEXT.length) clearInterval(typeTimer);
    }, 42);

    // Voice
    if (window.speechSynthesis) {
      const utter = new SpeechSynthesisUtterance(INTRO_TEXT);
      utter.rate = 1.0;
      utter.onend = stopTalking;
      utter.onerror = stopTalking;
      speechSynthesis.cancel();
      speechSynthesis.speak(utter);
    } else {
      // No voice support: stop the pulse when typing finishes
      setTimeout(stopTalking, INTRO_TEXT.length * 42 + 400);
    }
  });
}
