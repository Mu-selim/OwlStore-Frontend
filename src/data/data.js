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
import "../../public/images/DashBoard/1.jpg"
export let itemsArr=[
    new item("10002332","../../public/images/DashBoard/1.jpg","Red v-neck t-shirt","Gucci","Tops",90),
    new item("10757452","../../public/images/DashBoard/2.jpg","Yellow v-neck t-shirt","Gucci","Tops",80),
    new item("10024254","../../public/images/DashBoard/3.jpg","Slim fit blue jeans","Mavi","Bottoms",70),
    new item("10554532","../../public/images/DashBoard/4.jpg","Purple raincoat","Gant","Tops",100),
    new item("10788532","../../public/images/DashBoard/5.jpg","Brown cardigan","Blaker","Bottoms",150),
    new item("10008765","../../public/images/DashBoard/6.jpg","Brown jacket","Harley","Tops",300),
    new item("10002332","../../public/images/DashBoard/1.jpg","Red v-neck t-shirt","Gucci","Bottoms",200),
    new item("10757452","../../public/images/DashBoard/2.jpg","Yellow v-neck t-shirt","Gucci","Tops",210),
    new item("10024254","../../public/images/DashBoard/3.jpg","Slim fit blue jeans","Mavi","Bottoms",320),
]