const displayHoverElement = () => {
  const hoverElement = document.querySelectorAll(".pwrfit-hover");
  const portfolioImage = document.querySelectorAll(".portfolio-image");
  const hoverContent = document.querySelectorAll(".hover-content");
  console.dir(hoverContent);
  var content = [
    {
      title: "Pwrfit Studios",
      languages: "HTML, CSS, JAVASCRIPT, JQUERY, AJAX, STRIPE API, PHP, MYSQL",
    },
    {
      title: "Digicreate",
      languages: "HTML, CSS, JAVASCRIPT, PHP, MYSQL",
    },
    {
      title: "The Kitchen Catering",
      languages: "HTML, CSS, JAVASCRIPT, PHP",
    },
    {
      title: "Webgo",
      languages: "HTML, CSS, JAVASCRIPT, JQUERY, AJAX, PHP, MYSQL",
    },
    {
      title: "Little Nostalgic",
      languages: "Shopify",
    },
    {
      title: "Commodore United",
      languages: "Wordpress",
    },
  ];

  portfolioImage.forEach((image, index) => {
    console.log(index);
    image.addEventListener("mouseover", () => {
      hoverElement[index].classList.add("full-width");
      hoverContent[index].classList.add("display-hover-content");
    });
    image.addEventListener("mouseleave", () => {
      hoverElement[index].classList.remove("full-width");
      hoverContent[index].classList.remove("display-hover-content");
    });
    let h1Element = document.createElement("h1");
    let pElement = document.createElement("p");
    h1Element.innerText = content[index].title;
    pElement.innerText = content[index].languages;
    hoverContent[index].appendChild(h1Element);
    hoverContent[index].appendChild(pElement);
  });
};
displayHoverElement();
