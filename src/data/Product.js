const description = "It debuted in basketball and was transformed by subcultures around the globe. The adidas Campus trainer has made an impact everywhere, from stages to skate parks to city streets. Now, in collaboration with Footpatrol."
export class Product{
    static counter = 1;

    constructor(name, price, images, gender, category, sizes, colors, rating, brand){
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