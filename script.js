const card = document.querySelector(".card");

card.addEventListener("mousemove", () => {
  const imagetag = document.querySelector(".card a:nth-of-type(3) img");
  if (imagetag) {
    // Check if imagetag exists to avoid errors
    imagetag.style.display = "block";
  }
});
