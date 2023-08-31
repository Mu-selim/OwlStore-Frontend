export class Product{
    static counter = 1;
    constructor(name, price, images, description, category, sizes, colors, rating, brand){
        this.id = Product.counter;
        this.name = name;
        this.price = price;
        this.images = images;
        this.description = description;
        this.category = category;
        this.sizes = sizes;
        this.colors = colors;
        this.rating = rating;
        this.brand = brand;
        Product.counter++;
    }
    
}