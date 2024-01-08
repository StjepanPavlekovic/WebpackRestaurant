function loadAbout(displayElement) {
  const aboutDiv = document.createElement("div");
  aboutDiv.setAttribute("id", "about");

  const heading = document.createElement("h1");
  heading.textContent = "Webpack Restaurant";

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
  mainParagraph.innerHTML = `It is a long established fact that a reader will be distracted by
                          the readable content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here,
                          content here', making it look like readable English.
                          <br /><br />
                          Many desktop publishing packages and web page editors now use
                          Lorem Ipsum as their default model text, and a search for 'lorem
                          ipsum' will uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by accident,
                          sometimes on purpose (injected humour and the like).`;

  aboutDiv.appendChild(heading);
  aboutDiv.appendChild(firstSetOfDots);
  aboutDiv.appendChild(italicizedText);
  aboutDiv.appendChild(secondSetOfDots);
  aboutDiv.appendChild(mainParagraph);

  displayElement.appendChild(aboutDiv);
}

export default loadAbout;
