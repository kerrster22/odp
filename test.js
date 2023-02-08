function Product(name, src) {
  this.name = name;
  this.src = src;
  this.click = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

for (let i = 0; i < productNames.length; i++) {
  new Product(productNames[i], `images/${productNames[i]}.jpeg`);
}

function randomProductIdx() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function renderImgs() {
  let productIdx1 = randomProductIdx();
  let productIdx2 = randomProductIdx();
  let productIdx3 = randomProductIdx();

  while (
    productIdx1 === productIdx2 ||
    productIdx1 === productIdx3 ||
    productIdx2 === productIdx3
  ) {
    productIdx2 = randomProductIdx();
    productIdx3 = randomProductIdx();
  }
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");

  img1.src = Product.allProducts[productIdx1].src;
  img2.src = Product.allProducts[productIdx2].src;
  img3.src = Product.allProducts[productIdx3].src;
  img1.alt = Product.allProducts[productIdx1].name;
  img2.alt = Product.allProducts[productIdx2].name;
  img3.alt = Product.allProducts[productIdx3].name;
}
renderImgs();

function handleClick(event) {
  if (event.target === imgContainer) {
    alert("please click an img");
    return;
  }
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (event.target.alt === Product.allProducts[i].name);
    Product.allProducts[i].clicks++;
    break;
  }
  renderImgs();
}
const imgContainer = document.getElementById("img-container");
imgContainer.addEventListener("click", handleClick);
