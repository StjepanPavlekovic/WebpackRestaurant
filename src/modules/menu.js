function loadMenu(displayElement) {
  const menuItems = [
    {
      imgSrc: "./src/public/burger.jpg",
      title: "AI-catching burger",
      description:
        "This burger is like no other - literally. Soft buns, juicy meat, melted cheese... What more can you want?",
    },
    {
      imgSrc: "./src/public/fish.jpg",
      title: "Oven-baked sAImon",
      description:
        "Juicy, tender, delicious... Done just right, coupled with finest herbs and dressings.",
    },
    {
      imgSrc: "./src/public/pasta.jpg",
      title: "Pasta AI-dente",
      description:
        "Soft on the outside with a bite in the center. This pasta cooked to perfection will get you as close as it gets to the authentic experience of AItaly.",
    },
    {
      imgSrc: "./src/public/pizza.jpg",
      title: "Mama mAIa!",
      description:
        "Beautiful crust, fresh san marzano tomatoes, mozzarella and fresh basil. Nothing more to say.",
    },
    {
      imgSrc: "./src/public/steak.jpg",
      title: "RibAI steak",
      description:
        "This prime cut of meat will leave you wanting more. Done to perfection, served with a beautiful mix of greens. Goes well with our red wines.",
    },
    {
      imgSrc: "./src/public/tiramisu.jpg",
      title: "Neuramisu",
      description:
        "Pride and joy of our dessert menu. Bitter-sweet combo from heaven, right here in our cooler - ready to be served.",
    },
  ];

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("hidden");
  menuContainer.setAttribute("id", "menu");

  menuItems.forEach((menuItem) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const img = document.createElement("img");
    img.classList.add("menu-img");
    img.src = menuItem.imgSrc;

    const itemDescriptionDiv = document.createElement("div");
    itemDescriptionDiv.classList.add("item-description");

    const title = document.createElement("h3");
    title.textContent = menuItem.title;

    const description = document.createElement("p");
    description.textContent = menuItem.description;

    itemDescriptionDiv.appendChild(title);
    itemDescriptionDiv.appendChild(description);

    menuItemDiv.appendChild(img);
    menuItemDiv.appendChild(itemDescriptionDiv);

    menuContainer.appendChild(menuItemDiv);
  });

  displayElement.appendChild(menuContainer);

  return menuContainer;
}

export default loadMenu;
