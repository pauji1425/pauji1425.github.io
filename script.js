// RSVP Form
const form = document.getElementById('rsvp-form');
const rsvpList = document.getElementById('rsvp-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = form.querySelectorAll('input, textarea');
  const name = inputs[0].value;
  const message = inputs[1].value;
  const entry = document.createElement('div');
  entry.innerHTML = `<strong>${name}:</strong> ${message}`;
  rsvpList.appendChild(entry);
  form.reset();
});

// Auto play music
document.getElementById('background-music').volume = 0.5;
<script>
// Lightbox
const galleryImages = document.querySelectorAll('.gallery-photos img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
</script>
