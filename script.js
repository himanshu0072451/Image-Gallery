const numberOfImages = 50;

function fetchAndDisplayRandomImages() {
  const container = document.getElementById("con");

  for (let i = 0; i < numberOfImages; i++) {
    const width = Math.floor(Math.random() * 600) + 200;
    const height = Math.floor(Math.random() * 600) + 200;

    fetch(`https://picsum.photos/${width}/${height}`)
      .then((response) => {
        const imgElement = document.createElement("img");
        imgElement.src = response.url;
        imgElement.alt = "Placeholder";

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.appendChild(imgElement);

        container.appendChild(itemDiv);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }
}
fetchAndDisplayRandomImages();
const suggestion = () => {
  let input = document.getElementById("input");
  input.addEventListener("focus", function () {
    document.getElementById("overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.getElementById("overlay").style.display = "none";
  });
};
suggestion();
