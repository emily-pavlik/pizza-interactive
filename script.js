const slider = document.getElementById("comparison-slider");
const overlay = document.getElementById("image-overlay");
const divider = document.getElementById("slider-divider");

function updateComparison() {
  const value = Number(slider.value);

  // Reveal the correct portion of the Italian image.
  overlay.style.clipPath =
    `inset(0 ${100 - value}% 0 0)`;

  // Move the divider with the slider.
  divider.style.left = `${value}%`;
}

slider.addEventListener("input", updateComparison);

// Set the correct starting position.
updateComparison();