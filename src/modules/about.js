function loadAbout(displayElement) {
  const aboutDiv = document.createElement("div");
  aboutDiv.setAttribute("id", "about");

  const heading = document.createElement("h1");
  heading.textContent = "ByteArt Gourmet Lab";

  const firstSetOfDots = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("span");
    dot.textContent = ".";
    firstSetOfDots.appendChild(dot);
  }

  const italicizedText = document.createElement("p");
  const italicizedContent = document.createElement("i");
  italicizedContent.textContent = '"Where tradition meets modern..."';
  italicizedText.appendChild(italicizedContent);

  const secondSetOfDots = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("span");
    dot.textContent = ".";
    secondSetOfDots.appendChild(dot);
  }

  const mainParagraph = document.createElement("p");
  mainParagraph.innerHTML = `Welcome to ByteArt Gourmet Lab, where culinary artistry meets technological innovation. Our fusion of gourmet traditions with cutting-edge AI techniques creates a dining experience that's both a feast for the palate and a celebration of creativity.
  <br><br>
  At ByteArt, savor dishes crafted by skilled chefs and AI algorithms, blending gourmet flavors with modern flair. Discover a menu where tradition harmonizes with innovation, promising an extraordinary culinary journey for enthusiasts of both classic and avant-garde tastes. 
  <br><br>
  Join us at ByteArt Gourmet Lab to explore a symphony of flavors, where every dish is a masterpiece born from the intersection of art, technology, and gourmet expertise.`;

  aboutDiv.appendChild(heading);
  aboutDiv.appendChild(firstSetOfDots);
  aboutDiv.appendChild(italicizedText);
  aboutDiv.appendChild(secondSetOfDots);
  aboutDiv.appendChild(mainParagraph);

  displayElement.appendChild(aboutDiv);

  return aboutDiv;
}

export default loadAbout;
