function Product(id, name, brand, price, mainImage, specs) {
  this.id = id;
  this.name = name;
  this.bradn = brand;
  this.price = price;
  this.mainImage = mainImage;
  this.specs = specs;
}

const product = new Product(
  1,
  "Macbook Air",
  "Apple",
  1400,
  "../content/macbookair.jpeg",
  "lorem lorem lorem"
);

document.getElementsByClassName("product_title")[0].innerHTML = product.name;
document
  .getElementById("product_main_img")
  .setAttribute("src", product.mainImage);
