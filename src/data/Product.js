const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id justo pharetra, commodo nibh a, volutpat arcu. Nulla mi est, tempor quis tincidunt vitae, hendrerit ac arcu. Proin eget metus sit amet lacus ultricies rhoncus ac at elit. Suspendisse id.";
export class Product {
  static counter = 1;

  constructor(
    name,
    price,
    images,
    gender,
    category,
    sizes = 3,
    colors,
    rating,
    brand,
  ) {
    this.id = Product.counter;
    this.name = name;
    this.price = price;
    this.images = images;
    this.gender = gender;
    this.description = description;
    this.category = category;
    this.sizes = sizes;
    this.colors = colors;
    this.rating = rating;
    this.brand = brand;
    Product.counter++;
  }
}
