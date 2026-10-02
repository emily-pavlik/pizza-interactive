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

/* =========================
   PIZZA HOTSPOT INFORMATION
   ========================= */

const hotspotInfo = {
  "thin-crust": {
    title: "Thin, Soft Crust",
    text: "Traditional Neapolitan pizza has a thin, soft center with a light texture."
  },

  "puffy-edge": {
    title: "Puffy, Charred Edge",
    text: "The outer edge, called the cornicione, is raised and often develops a charred appearance from high-temperature baking."
  },

  "simple-toppings": {
    title: "Simple Toppings",
    text: "Neapolitan pizza traditionally uses a small number of ingredients, allowing flavors such as tomato, mozzarella, basil and olive oil to stand out."
  },

  "thick-crust": {
    title: "Thick Crust",
    text: "Chicago-style deep-dish pizza is known for its substantial crust, creating a much deeper base than Neapolitan pizza."
  },

  "layers": {
    title: "Layers of Cheese and Toppings",
    text: "Deep-dish pizza is built with substantial layers of cheese and other toppings inside its deep crust."
  },

  "sauce-top": {
    title: "Tomato Sauce on Top",
    text: "Unlike traditional Neapolitan pizza, Chicago-style deep-dish commonly places tomato sauce over the cheese and toppings."
  }
};


const hotspots = document.querySelectorAll(".hotspot");

const infoBox = document.getElementById("hotspot-info");

const infoTitle = document.getElementById("hotspot-title");

const infoText = document.getElementById("hotspot-text");

const closeInfo = document.getElementById("close-info");


hotspots.forEach(function(hotspot) {

  hotspot.addEventListener("click", function() {

    const infoKey = hotspot.dataset.info;

    const information = hotspotInfo[infoKey];

    infoTitle.textContent = information.title;

    infoText.textContent = information.text;

    infoBox.classList.add("active");

  });

});


closeInfo.addEventListener("click", function() {

  infoBox.classList.remove("active");

});
