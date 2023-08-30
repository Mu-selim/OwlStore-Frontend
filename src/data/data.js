export class item{
    constructor(barcode,image,name,brand,category,price)
    {
        this.barcode=barcode;
        this.image=image;
        this.name=name;
        this.brand=brand;
        this.category=category;
        this.price=price;
    }
}

export let itemsArr=[
    new item("10002332","","Red v-neck t-shirt","Gucci","Tops",90),
    new item("10757452","","Yellow v-neck t-shirt","Gucci","Tops",80),
    new item("10024254","","Slim fit blue jeans","Mavi","Bottoms",70),
    new item("10554532","","Purple raincoat","Gant","Tops",100),
    new item("10788532","","Brown cardigan","Blaker","Bottoms",150),
    new item("10008765","","Brown jacket","Harley","Tops",300),
    new item("10002332","","Red v-neck t-shirt","Gucci","Bottoms",200),
    new item("10757452","","Yellow v-neck t-shirt","Gucci","Tops",210),
    new item("10024254","","Slim fit blue jeans","Mavi","Bottoms",320),
    new item("10554532","","Purple raincoat","Gant","Tops",900),
    new item("10788532","","Brown cardigan","Blaker","Tops",600),
    new item("10008765","","Brown jacket","Harley","Bottoms",450),
]